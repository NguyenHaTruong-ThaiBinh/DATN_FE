import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'
import { updateEnableByUser } from '../API/Api';

function ModalRemoveMatching({ matchingData, setIsRefresh }) {
  const [idMatching, setIdMatching] = useState('');
  const idUser = Cookies.get('idUser');

  useEffect(() => {
    if (matchingData) {
      setIdMatching(matchingData.idMatching);
    }
  }, [matchingData]);

  const handleRemove = async () => {
    const formData = new FormData();
    formData.append('idUser', idUser);
    try {
      await updateEnableByUser('matching', idMatching, formData);
      toast.success('Remove Successfull');
      document
        .querySelector('#removematching [data-bs-dismiss="modal"]')
        ?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        document
          .querySelector('#removematching [data-bs-dismiss="modal"]')
          ?.click();
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="removematching"
      tabIndex="-1"
      aria-labelledby="removematchingLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="removematchingLabel">
              Delete
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Đóng"
            ></button>
          </div>
          <div className="modal-body">
            Do you want to delete the match at{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {matchingData.time}
            </span>{' '}
            on{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {matchingData.day}
            </span>{' '}
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
              onClick={handleRemove}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRemoveMatching;
