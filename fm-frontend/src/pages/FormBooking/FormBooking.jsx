import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  fetchDataById,
  fetchDataByIdFieldAndDay,
  postFormData,
} from '../../API/Api';
import { toast } from 'react-toastify';

function FormBooking() {
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const [date, setDate] = useState('');
  const { name, type, idField, phoneNumber, address, nameStadium } =
    state || {};
  const [listTime, setListTime] = useState([]);
  const [listPriceField, setListPriceField] = useState([]);
  const [price, setPrice] = useState('');
  const [idPrice, setIdPrice] = useState('');
  const [user, setUser] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const idUser = localStorage.getItem('idUser');

  const handleBack = () => {
    navigate(`/${from}`);
  };

  const handlePay = async () => {
    if (!idUser || !idPrice || !date) {
      toast.error('Please enter complete information!');
      return;
    }
    const formData = new FormData();
    formData.append('idUser', idUser);
    formData.append('idPrice', idPrice);
    formData.append('totalPrice', price);
    formData.append('day', date);

    try {
      await postFormData('booking/create-payment', formData).then((res) => {
        const url = res.data.result;
        window.location.href = url;
      });
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };
  //lấy thời gian theo ngày và id sânsân
  useEffect(() => {
    if (idField && date) {
      fetchDataByIdFieldAndDay('time', idField, date)
        .then((respone) => {
          setListTime(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idField, date]);

  //lấy thông tin của User
  useEffect(() => {
    if (idUser) {
      fetchDataById('users', idUser)
        .then((respone) => {
          setUser(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idUser]);
  //lấy thông tin sân theo id sânsân
  useEffect(() => {
    if (idField) {
      fetchDataById('price', idField)
        .then((respone) => {
          setListPriceField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idField]);

  useEffect(() => {
    if (!selectedTime) {
      setPrice('');
      setIdPrice('');
      return;
    }
    if (selectedTime && listPriceField.length > 0) {
      const selectedPriceItem = listPriceField.find(
        (item) => item.idTime === parseInt(selectedTime)
      );
      if (selectedPriceItem) {
        setPrice(selectedPriceItem.price);
        setIdPrice(selectedPriceItem.idPrice);
      } else {
        setPrice('');
        setIdPrice('');
      }
    }
  }, [selectedTime, listPriceField]);
  return (
    <>
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
                    Stadium: {nameStadium}
                  </h5>
                  <h5 class="mb-0 fw-semibold text-white">Since 2003</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row row-cols-3 d-flex justify-content-md-between">
                <div class="col-md-3 d-print-flex align-self-center">
                  <div class="">
                    <h5 class="my-1 fw-semibold fs-18">Mr HaTruong:</h5>
                    <p class="text-muted ">Hotline: {phoneNumber}</p>
                  </div>
                </div>
                <div class="col-md-3 d-print-flex align-self-center">
                  <div class="">
                    <address class="fs-13">
                      <strong class="fs-14">Position :</strong>
                      <br />
                      {address}
                      <br />
                    </address>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3 row">
                        <label
                          for="example-text-input"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Name
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            value={user.name}
                            id="example-text-input"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label
                          for="field"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Field
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="text"
                            value={name}
                            id="field"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label
                          for="type"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Type
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="number"
                            value={type}
                            id="type"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row has-error">
                        <label
                          for="inputHorizontalDnger"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Price
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="numbernumber"
                            class="form-control is-invalid"
                            id="inputHorizontalDnger"
                            placeholder="Price"
                            value={
                              Number(price).toLocaleString('vi-VN') + ' VND'
                            }
                            readOnly
                          />
                          <div class="invalid-feedback">
                            You have to pay this price!
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="mb-3 row">
                        <label
                          for="phone"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Telephone
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="search"
                            value={user.phoneNumber}
                            id="phone"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row has-success">
                        <label
                          for="inputHorizontalSuccess"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Email
                        </label>
                        <div class="col-sm-10">
                          <input
                            type="email"
                            class="form-control is-valid"
                            id="inputHorizontalSuccess"
                            value={user.email}
                          />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label
                          for="example-date-input"
                          class="col-sm-2 col-form-label text-end"
                        >
                          Date
                        </label>
                        <div class="col-sm-10">
                          <input
                            class="form-control"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            id="example-date-input"
                          />
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label class="col-sm-2 col-form-label text-end">
                          Time
                        </label>
                        <div class="col-sm-10">
                          <select
                            class="form-select"
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            aria-label="Default select example"
                          >
                            <option value="">...</option>
                            {listTime.map((item, index) => (
                              <option key={index} value={item.idTime}>
                                {item.time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                {/* Các nút ở bên phải */}
                <div className="col-lg-12 col-xl-4 ms-auto">
                  <div className="float-end d-print-none mt-2 mt-md-0">
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={handlePay}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleBack}
                    >
                      Cancel
                    </button>
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

export default FormBooking;
