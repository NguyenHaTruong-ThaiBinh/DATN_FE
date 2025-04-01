import React, { useState, useEffect } from 'react';

function Add11() {
  const [status, setStatus] = useState('on');
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [type, setType] = useState('7');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleReset = () => {
    setStatus('on');
    setName('');
    setImage(null);
    setType('7');
  };

  useEffect(() => {
    const modal = document.getElementById('add11');
    modal.addEventListener('hidden.bs.modal', handleReset);

    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);

  return (
    <>
      <div
        className="modal fade"
        id="add11"
        tabIndex="-1"
        aria-labelledby="addUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addUserLabel">
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
              <div className="form-group mb-2">
                <div className="d-flex align-items-center">
                  <i className="fas fa-image text-muted thumb-xl rounded me-2 border-dashed"></i>
                  <div className="flex-grow-1 text-truncate">
                    <label className="btn btn-primary text-light">
                      Add Image
                      <input
                        type="file"
                        hidden
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="fullName">Stadium Name</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-futbol"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Stadium Name"
                    aria-label="FullName"
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
                    aria-label="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
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
                    aria-label="Status"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="on">On</option>
                    <option value="off">Off</option>
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="List Stadium">List</label>
                <div className="input-group">
                  <select className="form-select">
                    <option defaultValue>7vs7</option>
                    <option value="1">Stadium 1</option>
                    <option value="2">Stadium 2</option>
                  </select>
                </div>
                <div class="card">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-hover mb-0">
                        <thead class="table-light">
                          <tr>
                            <th>#</th>
                            <th>Name Stadium</th>
                            <th>Type</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>S7</td>
                            <td>7</td>
                            <td>Online</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-100">
                Add Stadium
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add11;
