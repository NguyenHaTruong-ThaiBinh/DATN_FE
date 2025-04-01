function CancelStadium() {
  return (
    <>
      <div
        className="modal fade"
        id="cancelStadium"
        tabIndex="-1"
        aria-labelledby="cancelStadiumLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="cancelStadiumLabel">
                Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are you want to cancel field?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="button" className="btn btn-danger">
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CancelStadium;
