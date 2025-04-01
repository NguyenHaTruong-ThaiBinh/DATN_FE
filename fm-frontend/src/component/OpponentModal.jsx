import React from 'react';

function OpponentModal() {
  return (
    <div
      className="modal fade"
      id="opponentModal"
      tabIndex="-1"
      aria-labelledby="opponentModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="opponentModalTitle">
              Opponent Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtFirstNameShipping" className="form-label">
                    Field
                  </label>
                  <input
                    id="txtFirstNameShipping"
                    name="txtFirstNameShipping"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="txtLastNameShipping" className="form-label">
                    Type
                  </label>
                  <input
                    id="txtLastNameShipping"
                    name="txtLastNameShipping"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtCompanyShipping" className="form-label">
                    Time
                  </label>
                  <input
                    id="txtCompanyShipping"
                    name="txtCompanyShipping"
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="txtEmailAddressShipping"
                    className="form-label"
                  >
                    Date
                  </label>
                  <input
                    id="txtEmailAddressShipping"
                    name="txtEmailAddressShipping"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
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

export default OpponentModal;
