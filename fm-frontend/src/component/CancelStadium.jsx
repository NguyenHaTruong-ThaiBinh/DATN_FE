import React, { useState, useEffect } from 'react';
import { updateEnableField } from '../API/Api';
import { toast } from 'react-toastify';

function CancelStadium({ booking, setIsFresh }) {
  const [nameField, setNameField] = useState('');
  const [idBooking, setIdBooking] = useState('');

  useEffect(() => {
    if (booking) {
      setNameField(booking.nameField);
      setIdBooking(booking.idBooking);
    }
  }, [booking]);

  const handleCancel = async () => {
    try {
      await updateEnableField('booking', idBooking);
      toast.success('Cancel Success');
      document
        .querySelector('#cancelStadium [data-bs-dismiss="modal"]')
        ?.click();
      setIsFresh((prev) => !prev);
    } catch (error) {
      console.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      }
    }
  };
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
            <div className="modal-body">
              Are you want to cancel{' '}
              <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                {nameField}
              </span>{' '}
              with ID Booking:{' '}
              <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                {idBooking}
              </span>
              ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancel}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CancelStadium;
