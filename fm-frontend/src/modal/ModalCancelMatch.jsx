import React, { useState, useEffect } from 'react';
import { cancelMatch } from '../API/Api';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

function CancelMatch({ matchData, setIsFresh }) {
  const [idMatch, setIdMatch] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const idUser = Cookies.get('idUser');

  useEffect(() => {
    if (matchData) {
      setIdMatch(matchData.idMatching);
      setTime(matchData.time);
    }
  }, [matchData]);

  useEffect(() => {
    console.log('ID', idUser);
  }, [idUser]);

  const handleCancel = async () => {
    if (!reason) {
      toast.error('Please fill in all the required information!');
      return;
    }
    const formData = new FormData();
    formData.append('idUser', idUser);
    formData.append('reason', reason);
    try {
      await cancelMatch('matching', idMatch, formData);
      toast.success('Remove Successfull');
      document.querySelector('#cancelmatch [data-bs-dismiss="modal"]')?.click();
      setIsFresh((prev) => !prev);
    } catch (error) {
      console.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        document
          .querySelector('#cancelmatch [data-bs-dismiss="modal"]')
          ?.click();
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="cancelmatch"
      tabIndex="-1"
      aria-labelledby="cancelmatchLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cancelmatchLabel">
              Cancel
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Đóng"
            ></button>
          </div>
          <div className="modal-body">
            <div class="mb-3">
              <label class="form-label" for="message">
                Are you sure you want to cancel this match at{' '}
                <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                  {time}
                </span>{' '}
                ?
              </label>
              <textarea
                class="form-control"
                rows="5"
                id="message"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason"
              ></textarea>
            </div>
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
  );
}

export default CancelMatch;
