import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaDollarSign, FaBox } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { postFormData } from '../API/Api';

function FacilityModal({ selectedStadium, setIsRefresh }) {
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState(null);
  const [idStadium, setIdStadium] = useState('');
  const [name, setName] = useState('');
  const [inventory, setInventory] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  const resetForm = () => {
    setImage(null);
    setPreviewImage(null);
    setName('');
    setPrice('');
    setInventory('');
  };
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  const handleSubmit = async () => {
    if (!name || !inventory || !price) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idStadium', idStadium);
    formData.append('name', name);
    formData.append('inventory', inventory);
    formData.append('price', price);
    if (image) {
      formData.append('img', image);
    }
    try {
      await postFormData('facility', formData);
      toast.success('Successfull!');
      document
        .querySelector('#facilitymodal [data-bs-dismiss="modal"]')
        ?.click();
      resetForm();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  return (
    <div
      className="modal fade"
      id="facilitymodal"
      tabIndex="-1"
      aria-labelledby="facilitymodalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="facilitymodalLabel">
              <FaPlusCircle className="me-2" /> Add Facility
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-group mb-2">
              <div className="d-flex align-items-center">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="rounded border"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                ) : (
                  <i className="fas fa-image text-muted thumb-xl rounded me-2 border-dashed"></i>
                )}
                <div className="flex-grow-1 text-truncate">
                  <label className="btn btn-primary text-light">
                    Add Image
                    <input type="file" hidden onChange={handleImageChange} />
                  </label>
                </div>
              </div>
            </div>
            <form id="form-validation-2" className="form">
              <div className="mb-2">
                <label htmlFor="username" className="form-label">
                  <FaPlusCircle className="me-2" /> Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  <FaDollarSign className="me-2" /> Price
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="email"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  <FaBox className="me-2" /> Quantity
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="password"
                  placeholder="Enter Quantity"
                  value={inventory}
                  onChange={(e) => setInventory(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityModal;
