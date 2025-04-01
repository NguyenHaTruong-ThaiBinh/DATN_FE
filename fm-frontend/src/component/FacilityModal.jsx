import React from 'react';
import { FaPlusCircle, FaDollarSign, FaBox } from 'react-icons/fa';

function FacilityModal() {
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
                />
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  <FaBox className="me-2" /> Quantity
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="Enter Quantity"
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

export default FacilityModal;
