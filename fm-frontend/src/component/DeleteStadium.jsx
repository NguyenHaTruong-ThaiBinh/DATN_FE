import React, { useState,useEffect } from 'react';
import { updateEnableField } from '../API/Api';
import { toast } from 'react-toastify';

function DeleteStadium({ stadiumData, setRefresh }) {
  const [name, setName] = useState('');
  const [idField, setIdField] = useState('');

  useEffect(() => {
    if (stadiumData) {
      setIdField(stadiumData.idField || '');
      setName(stadiumData.name || '');
    }
  }, [stadiumData]);
  const handleRemove = async () => {
    try {
      await updateEnableField('field', idField);
      toast.success('Remove Success');
      document
        .querySelector('#deleteStadium [data-bs-dismiss="modal"]')
        ?.click();
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="deleteStadium"
      tabIndex="-1"
      aria-labelledby="deleteStadiumLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteStadiumLabel">
              Remove Field
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete <span> </span>
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {name}
            </span>{' '}
            ?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleRemove}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteStadium;
