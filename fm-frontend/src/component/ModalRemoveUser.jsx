import React, { useEffect, useState } from 'react';
import { updateEnableField } from '../API/Api';
import { toast } from 'react-toastify';

function ModalRemoveUser({ user, setIsRefresh }) {
  const [idUser, setIdUser] = useState('');
  useEffect(() => {
    if (user) {
      setIdUser(user.id || '');
    }
  }, [user]);
  const handleRemove = async () => {
    try {
      await updateEnableField('users', idUser);
      toast.success('Remove Successfull');
      document.querySelector('#removeuser [data-bs-dismiss="modal"]')?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
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
    <div
      className="modal fade"
      id="removeuser"
      tabIndex="-1"
      aria-labelledby="removeUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="removeUserLabel">
              Confirm Remove
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to remove{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {user.name}
            </span>{' '}
            ?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRemoveUser;
