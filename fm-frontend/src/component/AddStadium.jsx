import React, { useState, useEffect } from 'react';
import { postFormData } from '../API/Api';
import { toast } from 'react-toastify';

function AddStadium({ setIsRefresh }) {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const resetForm = () => {
    setImage(null);
    setPreviewImage(null);
    setName('');
    setAddress('');
    setPhoneNumber('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!name || !address || !phoneNumber) {
      toast.error('Please enter complete information!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    if (image) {
      formData.append('img', image); // Đảm bảo gửi file đúng
    }

    try {
      await postFormData('stadium', formData);
      toast.success('Add Stadium Successfull!');
      document.querySelector('#addstadium [data-bs-dismiss="modal"]')?.click();
      setIsRefresh((prev) => !prev);
      resetForm();
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  useEffect(() => {
    const modal = document.getElementById('addstadium');
    if (modal) {
      modal.addEventListener('hidden.bs.modal', resetForm);
    }

    return () => {
      if (modal) {
        modal.removeEventListener('hidden.bs.modal', resetForm);
      }
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="addstadium"
      tabIndex="-1"
      aria-labelledby="addstadiumLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addstadiumLabel">
              Add Stadium
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="form">
              {/* oneone */}
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
              {/* twotwo */}
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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

export default AddStadium;
