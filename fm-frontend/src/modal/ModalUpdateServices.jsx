import React, { useState, useEffect } from 'react';
import { updateFormData } from '../API/Api';
import { toast } from 'react-toastify';

function ModalUpdateServices({ servicesData, setIsRefresh }) {
  const [idService, setIdService] = useState('');
  const [name, setName] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [costPrice, setCostPrice] = useState('');

  useEffect(() => {
    if (servicesData) {
      setIdService(servicesData.id || '');
      setName(servicesData.name || '');
      setRetailPrice(servicesData.retailPrice || '');
      setCostPrice(servicesData.costPrice || '');
    }
  }, [servicesData]);
  const handleUpdateServices = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('retailPrice', retailPrice);
    formData.append('costPrice', costPrice);
    try {
      await updateFormData('services', idService, formData);
      toast.success('Update Successfull');
      document
        .querySelector('#updateservices [data-bs-dismiss="modal"]')
        ?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      toast.error('Error: ', error);
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
      id="updateservices"
      tabIndex="-1"
      aria-labelledby="updateservicesLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateservicesLabel">
              Update Service
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-2">
              <label> Name Service</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-tag"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Service Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-2">
              <label> Cost Price</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost Price"
                  value={costPrice}
                  readOnly
                />
              </div>
            </div>
            <div className="mb-2">
              <label> Retail Price</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Retail Price"
                  value={retailPrice}
                  onChange={(e) => setRetailPrice(e.target.value)}
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleUpdateServices}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateServices;
