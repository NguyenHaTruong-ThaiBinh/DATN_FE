import React, { useState, useEffect } from 'react';
import { fetchDataByIdTypeAndIdStadium } from '../API/Api';

function Add11({ IdStadium }) {
  const [selectedField11, setSelectedField11] = useState('');
  const [selectedField7, setSelectedField7] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const [listField11, setListField11] = useState([]);
  const [listField7, setListField7] = useState([]);

  useEffect(() => {
    setIdStadium(IdStadium);
    setSelectedField7('');
    setSelectedField11('');
  }, [IdStadium]);

  const handleReset = () => {
    setSelectedField7('');
    setSelectedField11('');
  };
  useEffect(() => {
    const modal = document.getElementById('add11');
    modal.addEventListener('hidden.bs.modal', handleReset);

    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, [IdStadium]);
  useEffect(() => {
    if (idStadium) {
      fetchDataByIdTypeAndIdStadium('field', 1, idStadium)
        .then((respone) => {
          if (respone.data.code === 200) {
            setListField7(respone.data.result);
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }, [idStadium]);

  useEffect(() => {
    if (idStadium) {
      fetchDataByIdTypeAndIdStadium('field', 2, idStadium)
        .then((respone) => {
          if (respone.data.code === 200) {
            setListField11(respone.data.result);
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }, [idStadium]);

  return (
    <>
      <div
        className="modal fade"
        id="add11"
        tabIndex="-1"
        aria-labelledby="addUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserLabel">
                Add Field
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-2">
                  <label htmlFor="field11Select" className="form-label">
                    Field 11
                  </label>
                  <select
                    className="form-select"
                    value={selectedField11}
                    onChange={(e) => setSelectedField11(e.target.value)}
                  >
                    <option value="">Select Field 11</option>
                    {listField11
                      .filter((item) => item.idField !== selectedField7)
                      .map((item, index) => (
                        <option key={index} value={item.idField}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-md-6 mb-2">
                  <label htmlFor="field7Select" className="form-label">
                    Field 7
                  </label>
                  <select
                    className="form-select"
                    value={selectedField7}
                    onChange={(e) => setSelectedField7(e.target.value)}
                  >
                    <option value="">Select Field 7</option>
                    {listField7
                      .filter((item) => item.idField !== selectedField11)
                      .map((item, index) => (
                        <option key={index} value={item.idField}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-100">
                Add Stadium
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add11;
