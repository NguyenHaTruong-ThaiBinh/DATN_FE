import React from 'react';

function SellOffModal() {
  return (
    <div
      className="modal fade"
      id="selloffmodal"
      tabIndex="-1"
      aria-labelledby="selloffmodalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="selloffmodalLabel">
              Sell-Off Confirmation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="mb-3">
              <label for="exampleInputQuantity" class="form-label">
                Quantity
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputQuantity"
                aria-describedby="emailHelp"
                placeholder="Quantity"
              />
              <small id="emailHelp" class="form-text text-muted">
                Please enter the quantity.
              </small>
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

export default SellOffModal;
