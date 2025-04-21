import React, { useState, useEffect } from 'react';
import { fetchDataById, postFormData } from '../API/Api';
import { toast } from 'react-toastify';

function ModalAddService({ selectedStadium, booking }) {
  const [idBooking, setIdBooking] = useState('');
  const [nameField, setNameField] = useState('');

  const [idStadium, setIdStadium] = useState('');
  const [listServices, setListServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [listServiceOrder, setListServiceOrder] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(null);

  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  useEffect(() => {
    if (booking) {
      setIdBooking(booking.idBooking);
      setNameField(booking.nameField);
    }
  }, [booking]);
  //lấy services theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('services', idStadium)
        .then((respone) => {
          setListServices(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  //lấy serviceOrder theo idBooking
  useEffect(() => {
    if (idBooking) {
      fetchDataById('serviceOrder', idBooking)
        .then((respone) => {
          setListServiceOrder(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idBooking, refresh]);
  //Lọc price theo service
  useEffect(() => {
    if (!selectedService) {
      setPrice('');
      setUnit('');
      setMaxQuantity(null);
      return;
    }
    if (selectedService && listServices.length > 0) {
      const selectedPriceItem = listServices.find(
        (item) => item.idService === parseInt(selectedService)
      );
      if (selectedPriceItem) {
        setPrice(selectedPriceItem.retailPrice);
        setUnit(selectedPriceItem.unit);
        setMaxQuantity(selectedPriceItem.quantity);
      } else {
        setPrice('');
        setUnit('');
        setMaxQuantity(null);
      }
    }
  }, [selectedService, listServices]);

  //nút save
  const handleSave = async () => {
    if (!selectedService || !quantity || !idBooking) {
      toast.error('Please enter complete information!');
      return;
    }

    if (quantity < 0) {
      toast.error('Quantity cannot be negative!');
      return;
    }

    if (maxQuantity !== null && quantity > maxQuantity) {
      toast.error(`Quantity not to exceed ${maxQuantity}`);
      return;
    }
    const formData = new FormData();
    formData.append('idBooking', idBooking);
    formData.append('idService', selectedService);
    formData.append('quantity', quantity);
    try {
      await postFormData('serviceOrder', formData);
      toast.success('Add Successfull!');
      setSelectedService('');
      setQuantity('');
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  return (
    <div
      id="modaladdservice"
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="modalAddServiceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalAddServiceLabel">
              Add Services
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h5 className="mb-2 fw-bold text-primary">
              Booking ID: {idBooking}
            </h5>
            <h5 className="mb-4 fw-semibold text-secondary">
              Field Name: {nameField}
            </h5>
            <div class="card-body pt-0">
              <div className="row mb-4 align-items-end">
                <div className="col-md-4">
                  <label className="form-label">Select Service</label>
                  <select
                    className="form-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Select Service...</option>
                    {listServices.map((item, index) => (
                      <option key={index} value={item.idService}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Price Service</label>
                  <input
                    className="form-control fw-bold text-danger fs-6"
                    type="text"
                    value={
                      price !== ''
                        ? `${Number(price).toLocaleString(
                            'vi-VN'
                          )} VND / ${unit}`
                        : ''
                    }
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    min="1"
                    placeholder="Enter quatity"
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      if (isNaN(value) || value < 0) {
                        setQuantity('');
                      } else if (maxQuantity !== null && value > maxQuantity) {
                        toast.error(`Quantity not to exceed  ${maxQuantity}`);
                        setQuantity(maxQuantity);
                      } else {
                        setQuantity(value);
                      }
                    }}
                  />
                </div>
              </div>

              <div class="table-responsive-sm">
                <table class="table mb-0">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name Service</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listServiceOrder.map((serviceOrder, index) => (
                      <tr key={serviceOrder.idServiceOrder}>
                        <th class="">{index + 1}</th>
                        <th scope="row">{serviceOrder.nameService}</th>
                        <td class="">{serviceOrder.quantity}</td>
                        <td class="">
                          {serviceOrder.totalPrice.toLocaleString('vi-VN')}
                          &nbsp;VND
                        </td>
                        <td class=""></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddService;
