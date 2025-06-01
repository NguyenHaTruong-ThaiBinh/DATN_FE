import { useState, useEffect } from 'react';
import { fetchDataById, postFormData } from '../API/Api';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

function InvoiceModal({ booking, isFresh, selectedStadium }) {
  const [nameStadium, setNameStadium] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [phoneNumberUser, setPhoneNumberUser] = useState('');
  const [phoneNumberStadium, setPhoneNumberStadium] = useState('');
  const [address, setAddress] = useState('');
  const [nameField, setNameField] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [idBooking, setIdBooking] = useState('');
  const [listServiceOrder, setListServiceOrder] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const idUser = Cookies.get('idUser');

  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  const handleSave = async () => {
    if (!idStadium || !idUser || !idBooking || !day || !finalTotal) {
      toast.error('Please enter complete information!');
      return;
    }
    const formData = new FormData();
    formData.append('day', day);
    formData.append('idStadium', idStadium);
    formData.append('idUser', idUser);
    formData.append('idBooking', idBooking);
    formData.append('totalPrice', finalTotal);
    try {
      await postFormData('invoice', formData);
      toast.success('Print Successfull!');
      document.querySelector('#invoice [data-bs-dismiss="modal"]')?.click();
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    if (booking) {
      setNameStadium(booking.nameStadium);
      setNameUser(booking.nameUser);
      setPhoneNumberUser(booking.phoneNumberStadium);
      setPhoneNumberStadium(booking.phoneNumberStadium);
      setAddress(booking.address);
      setNameField(booking.nameField);
      setDay(booking.day);
      setTime(booking.time);
      setTotalPrice(booking.totalPrice);
      setIdBooking(booking.idBooking);
    }
  }, [booking]);
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
  }, [idBooking, isFresh]);

  const serviceTotal = Array.isArray(listServiceOrder)
    ? listServiceOrder.reduce((sum, item) => sum + Number(item.totalPrice), 0)
    : 0;
  const finalTotal = Number(totalPrice) + serviceTotal;
  return (
    <>
      <div
        class="modal fade"
        id="invoice"
        tabIndex="-1"
        aria-labelledby="invoiceLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="invoiceLabel">
                Invoice
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-body bg-black rounded-top">
                      <div class="row">
                        <div class="col-4 align-self-center">
                          <img
                            src="assets/images/logo1.png"
                            alt="logo-small"
                            class="logo-sm me-1"
                            height="70"
                          />
                        </div>
                        <div class="col-8 text-end align-self-center">
                          <h5 class="mb-1 fw-semibold text-white">
                            <span class="text">Stadium: </span>
                            {nameStadium}
                          </h5>
                          <h5 class="mb-0 fw-semibold text-white">
                            <h5 className="mb-2 fw-bold text-primary">
                              ID: {idBooking}
                            </h5>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row row-cols-3 d-flex justify-content-md-between">
                        <div class="col-md-3 d-print-flex align-self-center">
                          <div class="">
                            <span class="badge rounded text-dark bg-light">
                              Invoice to
                            </span>
                            <h5 class="my-1 fw-semibold fs-15">{nameUser}</h5>
                            <p class="text-muted ">{phoneNumberUser}</p>
                          </div>
                        </div>
                        <div class="col-md-3 d-print-flex align-self-center">
                          <div class="">
                            <address class="fs-13">
                              <strong class="fs-14">Address</strong>
                              <br />
                              {address}
                              <br />
                              <abbr title="Phone">P:</abbr>
                              {phoneNumberStadium}
                            </address>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="table-responsive project-invoice">
                            <table class="table table-bordered mb-0">
                              <thead class="table-light">
                                <tr>
                                  <th>Name</th>
                                  <th>Day</th>
                                  <th>Hours</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Subtotal</th>
                                </tr>
                              </thead>
                              <tbody>
                                {/* Dòng đầu tiên: thông tin sân */}
                                <tr>
                                  <td>{nameField}</td>
                                  <td>{day}</td>
                                  <td>{time}</td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    {Number(totalPrice).toLocaleString('vi-VN')}{' '}
                                    VND
                                  </td>
                                </tr>

                                {/* Các dòng dịch vụ */}
                                {Array.isArray(listServiceOrder) &&
                                  listServiceOrder.map((item, index) => (
                                    <tr key={item.idServiceOrder}>
                                      <td>{item.nameService}</td>
                                      <td></td>
                                      <td></td>
                                      <td>{item.quantity}</td>
                                      <td>
                                        {Number(
                                          item.retailPrice
                                        ).toLocaleString('vi-VN')}
                                        &nbsp;VND
                                      </td>
                                      <td>
                                        {Number(item.totalPrice).toLocaleString(
                                          'vi-VN'
                                        )}
                                        &nbsp;VND
                                      </td>
                                    </tr>
                                  ))}

                                {/* Dòng Sub Total */}
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td colSpan="1" className="border-0"></td>
                                  <td
                                    colSpan="2"
                                    className="border-0 fs-14 text-dark"
                                  >
                                    <b>Sub Total</b>
                                  </td>
                                  <td className="border-0 fs-14 text-dark">
                                    <b>
                                      {finalTotal.toLocaleString('vi-VN')} VND
                                    </b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="text-end mt-3">
                        <button class="btn btn-success" onClick={handleSave}>
                          Print
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceModal;
