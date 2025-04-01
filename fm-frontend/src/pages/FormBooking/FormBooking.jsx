import { useState } from 'react';
import React from 'react';

function FormBooking() {
  const [date, setDate] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(false);

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
                  <h5 class="mb-1 fw-semibold text-white">HaTruong Stadium</h5>
                  <h5 class="mb-0 fw-semibold text-white">Since 2003</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row row-cols-3 d-flex justify-content-md-between">
                <div class="col-md-3 d-print-flex align-self-center">
                  <div class="">
                    <h5 class="my-1 fw-semibold fs-18">Mr HaTruong:</h5>
                    <p class="text-muted ">Hotline: +34393878300</p>
                  </div>
                </div>
                <div class="col-md-3 d-print-flex align-self-center">
                  <div class="">
                    <address class="fs-13">
                      <strong class="fs-14">Position :</strong>
                      <br />
                      15 Doan Ke Thien <br />
                      CauGiay , HaNoi
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
                              Stadium
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="text"
                                value="Stadium 1"
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
                                value="7"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Booking
                            </label>
                            <div className="col-sm-10">
                              <select className="form-select">
                                <option defaultValue>Booking Type</option>
                                <option value="1">Once</option>
                                <option value="2">Periodic</option>
                              </select>
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Week
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value="0"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Price
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value="300.000"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div class="card">
                              <div class="card-body pt-0">
                                <div class="table-responsive">
                                  <table class="table table-hover mb-0">
                                    <thead class="table-light">
                                      <tr>
                                        <th>#</th>
                                        <th>Name Service</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total Price</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1</th>
                                        <td>Water</td>
                                        <td>2</td>
                                        <td>10.000</td>
                                        <td>20.000</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Select Time
                            </label>
                            <div className="col-sm-10">
                              <select className="form-select">
                                <option defaultValue>Time</option>
                                <option value="1">7:00 AM</option>
                                <option value="2">10:00 AM</option>
                                <option value="3">1:00 PM</option>
                                <option value="4">4:00 PM</option>
                                <option value="5">7:00 PM</option>
                                <option value="6">10:00 PM</option>
                              </select>
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
                          <div className="mb-3 row align-items-center">
                            <label className="col-sm-2 col-form-label text-end">
                              Rival
                            </label>
                            <div className="col-sm-10 d-flex align-items-center">
                              <input
                                className="form-check-input border border-dark"
                                type="checkbox"
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Payment
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value="0"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Status Fee
                            </label>
                            <div className="col-sm-10">
                              <input
                                className="form-control"
                                type="number"
                                value="0"
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label text-end">
                              Select Service
                            </label>
                            <div className="col-sm-10">
                              <select className="form-select">
                                <option defaultValue>Service</option>
                                <option value="1">Water</option>
                                <option value="2">Foot</option>
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
                    <small class="fs-12">
                      ✅ "Thank you for booking a football field with us!"
                    </small>
                  </div>
                </div>
                <div class="col-lg-12 col-xl-4">
                  <div class="float-end d-print-none mt-2 mt-md-0">
                    <a href="#" class="btn btn-primary me-2">
                      Submit
                    </a>
                    <a href="#" class="btn btn-danger">
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
