import React, { useEffect, useState } from 'react';
import { updateRoleUser } from '../API/Api';

function ModalUpdateRoleUser({ user, setIsRefresh }) {
  const [idUser, setIdUser] = useState('');
  const handleSaveRole = async () => {
    try {
      await updateRoleUser('users', idUser);
      alert('Update role Success');
      document.querySelector('#updaterole [data-bs-dismiss="modal"]')?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Lỗi cập nhật:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    if (user) {
      setIdUser(user.id || '');
    }
  }, [user]);
  return (
    <div
      className="modal fade"
      id="updaterole"
      tabIndex="-1"
      aria-labelledby="updateRoleLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateRoleLabel">
              Update Role
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* Nội dung cập nhật role sẽ để ở đây */}
            <p>
              Do you want to change <strong>{user.name}</strong> to{' '}
              <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                {user.nameRole === 'Admin' ? 'USER' : 'ADMIN'}
              </span>
              ?
            </p>
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
              className="btn btn-primary"
              onClick={handleSaveRole}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalUpdateRoleUser;
