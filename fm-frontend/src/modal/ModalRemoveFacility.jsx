import React, { useState, useEffect } from 'react';
import { updateEnableField } from '../API/Api';
import { toast } from 'react-toastify';

function ModalRemoveFacility({ facilityData, setIsRefresh }) {
  const [idFacility, setIdFacility] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (facilityData) {
      setIdFacility(facilityData.idFacility);
      setName(facilityData.name);
    }
  }, [facilityData]);

  const handleRemove = async () => {
    try {
      await updateEnableField('facility', idFacility);
      toast.success('Remove Successfull');
      document
        .querySelector('#removefacility [data-bs-dismiss="modal"]')
        ?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Error:', error);
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
      id="removefacility"
      tabIndex="-1"
      aria-labelledby="removeserviceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="removeserviceLabel">
              Confirm Service Remove
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to remove{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>{name}</span>{' '}
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
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRemoveFacility;
