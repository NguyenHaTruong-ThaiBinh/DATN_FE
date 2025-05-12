import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  getServiceByIdService,
  updateServiceOrderByIdServiceOrder,
} from '../API/Api';

function ModalEditServiceOrder({
  selectedServiceOrder,
  setIsRefresh,
  isRefresh,
}) {
  const [idServiceOrder, setIdServiceOrder] = useState('');
  const [nameField, setNameField] = useState('');
  const [nameService, setNameService] = useState('');
  const [time, setTime] = useState('');
  const [quantity, setQuantity] = useState('');
  const [idService, setIdService] = useState('');
  const [service, setService] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState('');

  useEffect(() => {
    if (selectedServiceOrder) {
      setIdServiceOrder(selectedServiceOrder.idServiceOrder);
      setNameField(selectedServiceOrder.nameField);
      setNameService(selectedServiceOrder.nameService);
      setTime(selectedServiceOrder.time);
      setQuantity(selectedServiceOrder.quantity);
      setIdService(selectedServiceOrder.idService);
    }
  }, [selectedServiceOrder]);
  //lấy service theo idService
  useEffect(() => {
    if (idService) {
      getServiceByIdService('services', idService)
        .then((respone) => {
          setService(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idService, isRefresh]);
  //set số lượng max
  useEffect(() => {
    if (service) {
      setMaxQuantity(service.quantity);
    }
  }, [service]);

  //update quantity theo idServiceOrder
  const handleUpdateServiceOrder = async () => {
    const formData = new FormData();
    formData.append('quantity', quantity);
    try {
      await updateServiceOrderByIdServiceOrder(
        'serviceOrder',
        idServiceOrder,
        formData
      );
      setIsRefresh((prev) => !prev);
      toast.success('Update Successfull!');
      document
        .querySelector('#editserviceorder [data-bs-dismiss="modal"]')
        ?.click();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update false!');
      document
        .querySelector('#editserviceorder [data-bs-dismiss="modal"]')
        ?.click();
    }
  };
  return (
    <div
      className="modal fade"
      id="editserviceorder"
      tabIndex="-1"
      aria-labelledby="editserviceorderLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editserviceorderLabel">
              Edit service quantity
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card-body pt-0">
              <form>
                <div class="mb-3 row">
                  <label class="col-sm-2 col-form-label">ID</label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control shadow-sm border-2 border-primary fw-semibold text-primary bg-light"
                      value={idServiceOrder}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-2 col-form-label">Field</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={nameField}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-2 col-form-label">Time</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={time}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-2 col-form-label">Service</label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={nameService}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-sm-2 col-form-label">Quantity</label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      value={quantity}
                      onChange={(e) => {
                        const newQuantity = e.target.value;

                        // Kiểm tra nếu giá trị mới vượt quá maxQuantity
                        if (newQuantity > maxQuantity) {
                          toast.error(
                            `Quantity cannot be greater than the maximum available quantity: ${maxQuantity}`
                          );
                        } else {
                          setQuantity(newQuantity);
                        }
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleUpdateServiceOrder}
            >
              Submit
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditServiceOrder;
