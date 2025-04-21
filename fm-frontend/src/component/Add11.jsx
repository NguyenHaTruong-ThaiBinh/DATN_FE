import React, { useState, useEffect } from 'react';
import {
  fetchDataByIdTypeAndIdStadium,
  fetchDataByIdType11AndIdStadium,
  postFormData,
} from '../API/Api';
import { toast } from 'react-toastify';

function Add11({ IdStadium }) {
  const [selectedField11, setSelectedField11] = useState('');
  const [selectedField7, setSelectedField7] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const [listField11, setListField11] = useState([]);
  const [listField7, setListField7] = useState([]);
  const [refresh, setRefesh] = useState(false);

  useEffect(() => {
    setIdStadium(IdStadium);
    setSelectedField7('');
    setSelectedField11('');
  }, [IdStadium]);

  const handleReset = () => {
    setSelectedField7('');
    setSelectedField11('');
  };
  const handleSubmit = async () => {
    if (!selectedField11 || !selectedField11) {
      toast.error('Please fill in all information!');
    }
    const formData = new FormData();
    formData.append('idField7', selectedField7);
    formData.append('idField11', selectedField11);
    try {
      await postFormData('idfield', formData);
      toast('Successfull!');
      document.querySelector('#add11 [data-bs-dismiss="modal"]')?.click();
      setRefesh((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
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
  }, [idStadium, refresh]);

  useEffect(() => {
    if (idStadium) {
      fetchDataByIdType11AndIdStadium('field', 2, idStadium)
        .then((respone) => {
          if (respone.data.code === 200) {
            setListField11(respone.data.result);
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }, [idStadium, refresh]);

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
                    <option value="">...</option>
                    {listField11.map((item, index) => (
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
                    <option value="">...</option>
                    {listField7.map((item, index) => (
                      <option key={index} value={item.idField}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSubmit}
              >
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
