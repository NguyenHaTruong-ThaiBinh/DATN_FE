import React, { useState, useEffect } from 'react';

import { updateFormData } from '../API/Api';

function EditStadium({ stadiumData, setRefresh }) {
  const [idField, setIdField] = useState('');
  const [status, setStatus] = useState('on');
  const [name, setName] = useState('');
  const [nameType, setNameType] = useState('');
  const [img, setImg] = useState('san1.png');
  const [imgFile, setImgFile] = useState(null);

  useEffect(() => {
    if (stadiumData) {
      setIdField(stadiumData.idField || '');
      setStatus(stadiumData.status || 'on');
      setNameType(stadiumData.type);
      setImg(stadiumData.img || '');
      setName(stadiumData.name || '');
    }
  }, [stadiumData]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
      setImgFile(file);
    }
    setImgFile(file);
  };
  const handleSave = async () => {
    const formData = new FormData();
    formData.append('idField', idField);
    formData.append('name', name);
    formData.append('status', status);
    if (imgFile) {
      formData.append('img', imgFile);
    } else {
      const emptyFile = new Blob([], { type: 'application/octet-stream' });
      formData.append('img', emptyFile, 'emptyFile');
    }
    try {
      await updateFormData('field', idField, formData);
      alert('Update Success');
      document.querySelector('#editStadium [data-bs-dismiss="modal"]')?.click();
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
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
    <>
      <div
        className="modal fade"
        id="editStadium"
        tabIndex="-1"
        aria-labelledby="editStadiumLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editStadiumLabel">
                Edit Stadium
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Hiển thị ảnh trước */}
              <div className="form-group mb-2 text-center">
                <img
                  src={img}
                  alt="Stadium"
                  className="img-thumbnail rounded"
                  style={{
                    width: '100%',
                    maxHeight: '150px',
                    objectFit: 'cover',
                  }}
                />
                <div className="mt-2">
                  <label className="btn btn-sm btn-primary">
                    Change Image
                    <input type="file" hidden onChange={handleImageChange} />
                  </label>
                </div>
              </div>

              {/* Các input khác */}
              <div className="mb-2">
                <label htmlFor="stadiumName"> Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="stadiumName">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stadium Name"
                    aria-label="Stadium Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="type">Type</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-th-large"></i>
                  </span>
                  <select
                    className="form-control"
                    value={nameType}
                    onChange={(e) => setNameType(e.target.value)}
                  >
                    <option value="7">7</option>
                    <option value="11">11</option>
                  </select>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="status">Status</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i
                      className={`fas fa-toggle-${
                        status === 'ACTIVE'
                          ? 'on text-success'
                          : 'off text-muted'
                      }`}
                    ></i>
                  </span>
                  <select
                    className="form-control"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStadium;
