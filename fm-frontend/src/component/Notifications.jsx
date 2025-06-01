import React, { useEffect, useState } from 'react';
import { updateMessageRead } from '../API/Api';
import { toast } from 'react-toastify';

function Notifications({ notification, setFresh }) {
  const [message, setMessage] = useState('');
  const [day, setDay] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    if (notification) {
      setMessage(notification.message);
      setDay(notification.day);
      setIdMessage(notification.idMessage);
      setIsRead(notification.isRead === 'YES');
    }
  }, [notification]);

  const handleMarkAsRead = async () => {
    try {
      await updateMessageRead('message', idMessage);
      setIsRead(true);
      setFresh((prev) => !prev);
    } catch (err) {
      toast.error(err.message || 'Failed to mark as read');
    }
  };

  return (
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-10">
            <div class="">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <i class="fas fa-envelope thumb-lg rounded-circle d-flex justify-center align-items-center bg-light p-3"></i>
                </div>
                <div class="flex-grow-1 ms-2 text-truncate">
                  <h6 class="my-1 fw-medium text-dark fs-14">
                    New Message!
                    <small class="text-muted ps-2"></small>
                  </h6>
                  <p class="text-muted mb-0 text-wrap">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
            <button
              type="button"
              class="btn btn bg-secondary-subtle text-secondary btn-sm"
              onClick={handleMarkAsRead}
            >
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
