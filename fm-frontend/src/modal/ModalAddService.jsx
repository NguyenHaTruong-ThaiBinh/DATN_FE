import React from 'react';

function ModalAddService() {
  return (
    <div
      id="modaladdservice"
      className="modal fade"
      tabIndex="-1"
      aria-labelledby="modalAddServiceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalAddServiceLabel">
              Thêm Dịch Vụ
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Nội dung modal ở đây */}
            <p>Form hoặc thông tin thêm dịch vụ...</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary" 
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddService;
