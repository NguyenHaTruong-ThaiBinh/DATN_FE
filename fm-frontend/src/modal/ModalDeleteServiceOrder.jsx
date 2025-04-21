import React, { useState, useEffect } from 'react';
import { deleteServiceOrderByIdServiceOrder } from '../API/Api';
import { toast } from 'react-toastify';

function ModalDeleteServiceOrder({ selectedServiceOrder, setIsRefresh }) {
  const [idServiceOrder, setIdServiceOrder] = useState('');
  const [nameService, setNameService] = useState('');
  const [nameField, setNameField] = useState('');
  useEffect(() => {
    if (selectedServiceOrder) {
      setIdServiceOrder(selectedServiceOrder.idServiceOrder);
      setNameService(selectedServiceOrder.nameService);
      setNameField(selectedServiceOrder.nameField);
    }
  }, [selectedServiceOrder]);
  //xóa ServiceOrder theo idServiceOrder
  const handleDeleteServiceOrder = async () => {
    try {
      await deleteServiceOrderByIdServiceOrder('serviceOrder', idServiceOrder);
      toast.success('Delete Successful!');
      setIsRefresh((prev) => !prev);
      document
        .querySelector('#deleteservice [data-bs-dismiss="modal"]')
        ?.click();
    } catch (error) {
      console.error('Error:', error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
        document
          .querySelector('#deleteservice [data-bs-dismiss="modal"]')
          ?.click();
      }
    }
  };

  return (
    <div
      className="modal fade"
      id="deleteservice"
      tabIndex="-1"
      aria-labelledby="deleteServiceLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteServiceLabel">
              Delete Service Order
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {nameService}
            </span>{' '}
            of{' '}
            <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
              {nameField}
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
              onClick={handleDeleteServiceOrder}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteServiceOrder;
