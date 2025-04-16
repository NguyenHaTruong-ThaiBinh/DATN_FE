import { use, useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  fetchData,
  fetchDataById,
  fetchDataByIdFieldAndDay,
  postFormData,
} from '../../API/Api';

function FormBooking() {
  const { state } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const [date, setDate] = useState('');
  const { name, type, idField, phoneNumber, address, nameStadium, idStadium } =
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
      alert('Vui lòng nhập đầy đủ thông tin!');
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
      alert(`${error.response.data.message}`);
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
                <div className="col-12">
                  <div className="card">
                    <div className="card-body pt-0">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Name
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="text"
                                value={user.name}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Field
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="text"
                                value={name}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Type
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value={type}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Phone Number
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value={user.phoneNumber}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Date
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Select Time
                            </label>
                            <div className="col-sm-10">
                              <select
                                className="form-select"
                                value={selectedTime}
                                onChange={(e) =>
                                  setSelectedTime(e.target.value)
                                }
                              >
                                <option value="">Select Time</option>
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
                </div>
              </div>
              <hr />
              <div class="row d-flex justify-content-center">
                <div class="col-lg-12 col-xl-4 ms-auto align-self-center">
                  <div class="text-center">
                    <div className="mb-3 row">
                      <label className="col-sm-2 col-form-label text-end fw-bold text-primary fs-5">
                        Price
                      </label>
                      <div className="col-sm-10">
                        <input
                          className="form-control fw-bold text-danger fs-5 border-2 border-danger"
                          type="text"
                          value={Number(price).toLocaleString('vi-VN') + ' VND'}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-xl-4">
                  <div class="float-end d-print-none mt-2 mt-md-0">
                    <a
                      href="#a"
                      class="btn btn-primary me-2"
                      onClick={handlePay}
                    >
                      Submit
                    </a>
                    <a href="#" class="btn btn-danger" onClick={handleBack}>
                      Cancel
                    </a>
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
