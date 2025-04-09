import React, { useState, useEffect } from 'react';
import { fetchData } from '../API/Api';

function EditPriceField({ stadiumData }) {
  const [name, setName] = useState('');
  const [idField, setIdField] = useState('');
  const [listTime, setListTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [price, setPrice] = useState('');

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
      setSelectedTime('');
      setPrice('');
    }
  }, [stadiumData]);
  return (
    <>
      <div
        className="modal fade"
        id="editpricefield"
        tabIndex="-1"
        aria-labelledby="editpricefieldLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editpricefieldLabel">
                Edit Price
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
                <div className="col">
                  <h5 className="card-title mb-2">{name}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <select
                    className="form-select"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    {listTime.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.time}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPriceField;
