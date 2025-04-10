import React, { useEffect, useState } from 'react';
import { fetchData, fetchDataById } from '../API/Api';

function ViewPrice({ stadiumData, isFresh}) {
  const [name, setName] = useState('');
  const [idField, setIdField] = useState('');
  const [listTime, setListTime] = useState([]);
  const [listPriceField, setListPriceField] = useState([]);
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (stadiumData) {
      setIdField(stadiumData.idField || '');
      setName(stadiumData.name || '');
    }
  }, [stadiumData]);

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
  }, [idField,isFresh]);
  return (
    <div
      className="modal fade"
      id="editPrice"
      tabIndex="-1"
      aria-labelledby="editPriceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editPriceLabel">
              Price Field
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h4 class="card-title">{name}</h4>
                  </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="table-responsive">
                  <table class="table table-bordered mb-0 table-centered">
                    <thead>
                      <tr>
                        <th>Time </th>
                        <th>Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listTime.map((item) => {
                        const priceItem = listPriceField.find(
                          (price) => price.idTime === item.idTime
                        );

                        // Format giá trị hiển thị ban đầu
                        const formattedPrice =
                          priceItem?.price?.toLocaleString('en-US') || '';

                        return (
                          <tr key={item.idTime}>
                            <td>{item.time}</td>
                            <td>
                              <div
                                className="d-flex align-items-center justify-content-between bg-light px-3 py-2 rounded"
                                style={{ minWidth: '120px' }}
                              >
                                <span className="fw-bold text-dark">
                                  {formattedPrice}
                                </span>
                                <span className="badge bg-secondary ms-2">
                                  VND
                                </span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPrice;
