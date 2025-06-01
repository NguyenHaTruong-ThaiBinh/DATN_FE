import React, { useEffect, useState } from 'react';
import { fetchData, getFieldEmpty } from '../API/Api';

function ModalStadium({ stadiumData }) {
  const [listTime, setListTime] = useState([]);
  const [selectTime, setSelectTime] = useState('');
  const [date, setDate] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const [listFieldEmpty, setListFieldEmpty] = useState([]);

  useEffect(() => {
    if (stadiumData) {
      setIdStadium(stadiumData.idStadium);
    }
  }, [stadiumData]);

  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //lấy sân bị trống
  useEffect(() => {
    getFieldEmpty('field', idStadium, selectTime, date)
      .then((respone) => {
        setListFieldEmpty(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idStadium, selectTime, date]);
  return (
    <div
      className="modal fade"
      id="modalstadium"
      tabIndex="-1"
      aria-labelledby="modalstadiumLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalstadiumLabel">
              Sân: {stadiumData.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="d-flex justify-content-center gap-3">
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={selectTime}
                    onChange={(e) => setSelectTime(e.target.value)}
                  >
                    <option value="">-- Select Time --</option>
                    {listTime.map((d) => (
                      <option key={d.idTime} value={d.idTime}>
                        {d.time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div class="table-responsive">
                <table class="table mb-0">
                  <thead class="table-light">
                    <tr>
                      <th class="border-top-0">Name</th>
                      <th class="border-top-0">Type</th>
                      <th class="border-top-0">Price</th>
                      <th class="border-top-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listFieldEmpty.map((field, index) => (
                      <tr>
                        <td key={index}>
                          <div class="d-flex align-items-center">
                            <img
                              src={field.img}
                              height="40"
                              class="me-2 align-self-center rounded"
                              alt="..."
                            />
                            <div class="flex-grow-1 text-truncate align-self-center">
                              <h6 class="m-0">{field.name}</h6>
                              <p class="fs-12 text-muted mb-0"></p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <a
                            href="apps-invoice.html"
                            class="fs-12 text-primary"
                          >
                            {field.nameType}
                          </a>{' '}
                        </td>

                        <td>
                          <span class="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                            {Number(field.price).toLocaleString()}
                            &nbsp;VND
                          </span>
                        </td>
                        <td>
                          <a href="#">
                            <i class="las la-print text-secondary fs-18"></i>
                          </a>
                          <a href="#">
                            <i class="las la-download text-secondary fs-18"></i>
                          </a>
                          <a href="#">
                            <i class="las la-trash-alt text-secondary fs-18"></i>
                          </a>
                        </td>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalStadium;
