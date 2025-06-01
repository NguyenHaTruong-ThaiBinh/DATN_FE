import React, { useState, useEffect } from 'react';
import { updateEnableService } from '../API/Api';
import { toast } from 'react-toastify';

function ModalRemoveServices({ servicesData, setIsRefresh }) {
  const [idService, setIdService] = useState('');
  useEffect(() => {
    if (servicesData) {
      setIdService(servicesData.id);
    }
  }, [servicesData]);
  const handleRemove = async () => {
    try {
      await updateEnableService('services', idService);
      toast.success('Remove Successfull');
      document
        .querySelector('#removeservice [data-bs-dismiss="modal"]')
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
      id="removeservice"
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
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {servicesData.name}
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

export default ModalRemoveServices;
