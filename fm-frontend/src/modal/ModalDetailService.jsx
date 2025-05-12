import React, { useState, useEffect } from 'react';
import { fetchDataById } from '../API/Api';

function ModalDetailService({ servicesData }) {
  const [idService, setIdService] = useState('');
  const [listBillService, setListBillService] = useState([]);

  useEffect(() => {
    if (servicesData) {
      setIdService(servicesData.id);
    }
  }, [servicesData]);

  //lấy bill service theo idService
  useEffect(() => {
    if (idService) {
      fetchDataById('billservice', idService)
        .then((respone) => {
          setListBillService(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idService]);

  useEffect(() => {
    console.log('DS', idService);
  }, [idService]);
  return (
    <>
      <div
        className="modal fade"
        id="detailservice"
        tabIndex="-1"
        aria-labelledby="detailserviceLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          {' '}
          {/* hoặc modal-sm / modal-xl nếu muốn */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailserviceLabel">
                Invoice Service
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
                                  <th>Unit</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Subtotal</th>
                                  <th>Day</th>
                                </tr>
                              </thead>
                              <tbody>
                                {listBillService.map((billservice, index) => (
                                  <tr key={index}>
                                    <td>{billservice.name}</td>
                                    <td>{billservice.unit}</td>
                                    <td>{billservice.quantity}</td>
                                    <td>
                                      {' '}
                                      {Number(
                                        billservice.costPrice
                                      ).toLocaleString()}
                                      &nbsp;VND
                                    </td>
                                    <td>
                                      {' '}
                                      {Number(
                                        billservice.total
                                      ).toLocaleString()}
                                      &nbsp;VND
                                    </td>
                                    <td>{billservice.day}</td>
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
    </>
  );
}

export default ModalDetailService;
