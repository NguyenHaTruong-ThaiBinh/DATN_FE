import React, { useState,useEffect } from 'react';

function DeleteStadium({ stadiumData }) {
  const [name, setName] = useState('');
  const [idField, setIdField] = useState('');

   useEffect(() => {
      if (stadiumData) {
        setIdField(stadiumData.idField || '');
        setName(stadiumData.name || '');
      }
    }, [stadiumData]);
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
              Delete
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
            <strong>{name}</strong> ?
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
