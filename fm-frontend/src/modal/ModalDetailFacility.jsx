import React, { useState, useEffect } from 'react';
import { fetchDataById } from '../API/Api';

function ModalDetailFacility({ facilityData, isRefresh }) {
  const [idFacility, setIdFacility] = useState('');
  const [listBillFacility, setListBillFacility] = useState([]);
  useEffect(() => {
    if (facilityData) {
      setIdFacility(facilityData.idFacility);
    }
  }, [facilityData]);

  useEffect(() => {
    if (idFacility) {
      fetchDataById('billfacility', idFacility)
        .then((respone) => {
          setListBillFacility(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idFacility, isRefresh]);
  return (
    <div
      className="modal fade"
      id="detailfacility"
      tabIndex="-1"
      aria-labelledby="detailfacilityLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="detailfacilityLabel">
              Detail Facility
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Đóng"
            ></button>
          </div>
          <div className="modal-body">
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
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="row row-cols-3 d-flex justify-content-md-between">
                      <div class="col-md-3 d-print-flex align-self-center">
                        <div class="">
                          <span class="badge rounded text-dark bg-light">
                            Invoice to
                          </span>
                        </div>
                      </div>
                      <div class="col-md-3 d-print-flex align-self-center"></div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="table-responsive project-invoice">
                          <table class="table table-bordered mb-0">
                            <thead class="table-light">
                              <tr>
                                <th>Name</th>
                                <th>Day</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {listBillFacility.map((billFacility, index) => (
                                <tr key={index}>
                                  <td>{billFacility.nameFacility}</td>
                                  <td>{billFacility.day}</td>
                                  <td>{billFacility.quantity}</td>
                                  <td>
                                    {' '}
                                    {Number(
                                      billFacility.price
                                    ).toLocaleString()}
                                    &nbsp;VND
                                  </td>
                                  <td>
                                    {' '}
                                    {Number(
                                      billFacility.totalPrice
                                    ).toLocaleString()}
                                    &nbsp;VND
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetailFacility;
