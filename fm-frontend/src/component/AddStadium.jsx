import React from 'react';

function AddStadium() {
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
            <form id="form-validation-2" class="form">
              <div class="mb-2">
                <label for="username" class="form-label">
                  Name
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="username"
                  placeholder="Enter Name"
                />
                <small>Error Message</small>
              </div>
              <div class="mb-2">
                <label for="email" class="form-label">
                  Address
                </label>
                <input
                  class="form-control"
                  type="text"
                  id="email"
                  placeholder="Enter Address"
                />
                <small>Error Message</small>
              </div>
              <div class="mb-2">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  class="form-control"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
                <small>Error Message</small>
              </div>
              <div class="mb-3">
                <label for="password2" class="form-label">
                  Confirm Password
                </label>
                <input
                  class="form-control"
                  type="password"
                  id="password2"
                  placeholder="Enter password again"
                />
                <small>Error Message</small>
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
              data-bs-dismiss="modal"
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
