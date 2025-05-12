import React, { useEffect, useState } from 'react';
import { updateMessageRead } from '../API/Api';
import { toast } from 'react-toastify';

function Notifications({ notification, setFresh }) {
  const [message, setMessage] = useState('');
  const [day, setDay] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [hover, setHover] = useState(false);
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
    <div
      className={`dropdown-item py-3 px-3 border-bottom d-flex align-items-start position-relative rounded-3 transition-all ${
        hover ? 'bg-light' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e) => e.stopPropagation()}
      style={{
        cursor: isRead ? 'default' : 'pointer',
        opacity: isRead ? 0.6 : 1,
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div className="d-flex align-items-center w-100">
        <div
          className="flex-shrink-0 d-flex align-items-center justify-content-center bg-primary-subtle text-primary rounded-circle"
          style={{ width: 40, height: 40 }}
        >
          <i className="iconoir-wolf fs-4"></i>
        </div>
        <div className="flex-grow-1 ms-3 text-truncate">
          <h6 className="mb-1 fw-semibold text-dark fs-14">Tin nhắn mới</h6>
          <p className="mb-0 text-muted fs-13">{message}</p>
          <small className="text-secondary">{day}</small>
        </div>
      </div>

      {hover && !isRead && (
        <div className="position-absolute top-0 end-0 m-2">
          <button
            onClick={handleMarkAsRead}
            className="btn btn-success btn-sm rounded-pill shadow-sm"
            style={{ fontSize: '0.75rem', padding: '2px 8px' }}
          >
            ✔
          </button>
        </div>
      )}
    </div>
  );
}

export default Notifications;
