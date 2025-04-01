import React from 'react';
import { FaClipboardList, FaTag, FaClipboardCheck } from 'react-icons/fa';

function AddReport() {
  return (
    <div
      className="modal fade"
      id="addreport"
      tabIndex="-1"
      aria-labelledby="addreportLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addreportLabel">
              <FaClipboardList className="me-2" /> Add Report
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
                <label htmlFor="reportTitle" className="form-label">
                  <FaTag className="me-2" /> Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="reportTitle"
                  placeholder="Enter Report Title"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="reportDetails" className="form-label">
                  <FaClipboardCheck className="me-2" /> Details
                </label>
                <textarea
                  className="form-control"
                  id="reportDetails"
                  rows="3"
                  placeholder="Enter Report Details"
                ></textarea>
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

export default AddReport;
