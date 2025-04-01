import React, { useState } from 'react';

function EditStadium() {
  const [status, setStatus] = useState('on');
  const [type, setType] = useState('7');
  const [time, setTime] = useState('7');
  const [image, setImage] = useState('san1.png');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
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
                  src={image}
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
                <label htmlFor="stadiumName">Stadium Name</label>
                <div className="input-group">
                  <span className="input-group-text" id="stadiumName">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stadium Name"
                    aria-label="Stadium Name"
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
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="5">5</option>
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
                        status === 'on' ? 'on text-success' : 'off text-muted'
                      }`}
                    ></i>
                  </span>
                  <select
                    className="form-control"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="on">On</option>
                    <option value="off">Off</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="time">Time</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="far fa-clock"></i>
                      </span>
                      <select
                        className="form-control"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option value="7">07:00</option>
                        <option value="10">10:00</option>
                        <option value="13">13:00</option>
                        <option value="16">16:00</option>
                        <option value="19">19:00</option>
                        <option value="22">22:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="price">Price</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-dollar-sign"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        aria-label="Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-100">
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
