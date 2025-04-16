import React, { useState, useEffect } from 'react';
import { updateFormData } from '../API/Api';

function ModalUpdateServices({ servicesData, setIsRefresh }) {
  const [idService, setIdService] = useState('');
  const [name, setName] = useState('');
  const [retailPrice, setRetailPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantitySold, setQuantitySold] = useState('');
  const [costPrice, setCostPrice] = useState('');

  useEffect(() => {
    if (servicesData) {
      setIdService(servicesData.id || '');
      setName(servicesData.name || '');
      setRetailPrice(servicesData.retailPrice || '');
      setQuantity(servicesData.quantity || '');
      setQuantitySold(servicesData.quantitySold);
      setCostPrice(servicesData.costPrice || '');
    }
  }, [servicesData]);
  const handleUpdateServices = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('retailPrice', retailPrice);
    formData.append('quantity', quantity);
    formData.append('quantitySold', quantitySold);
    formData.append('costPrice', costPrice);
    try {
      await updateFormData('services', idService, formData);
      alert('Update Success');
      document
        .querySelector('#updateservices [data-bs-dismiss="modal"]')
        ?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      alert('Lỗi cập nhật', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
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
                  onChange={(e) => setCostPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-2">
              <label> Quantity</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-boxes"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-2">
              <label> Quantity Sold</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-boxes"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Quantity Sold"
                  value={quantitySold}
                  onChange={(e) => setQuantitySold(e.target.value)}
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
              className="btn btn-primary"
              onClick={handleUpdateServices}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateServices;
