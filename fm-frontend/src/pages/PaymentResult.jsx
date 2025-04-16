import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postPayFromData } from '../API/Api';

function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const queryObject = Object.fromEntries(queryParams.entries());

    postPayFromData('booking', queryObject)
      .then((res) => {
        setIsSuccess(true);
        console.log('Xác nhận từ server:', res.data);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.error('Lỗi xác nhận:', err);
      });
  }, [location.search]);

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div>
      {isSuccess ? (
        <div
          className="alert alert-success shadow-sm border-theme-white-2 d-flex justify-content-between align-items-center"
          role="alert"
        >
          <div className="d-flex align-items-center">
            <div
              className="thumb-xs bg-success rounded-circle d-flex justify-content-center align-items-center me-2"
              style={{ width: '30px', height: '30px' }}
            >
              <i className="fas fa-check text-white"></i>
            </div>
            <strong>Successful Payment!</strong>
          </div>
          <button
            className="btn btn-success btn-sm px-3 py-1 rounded-pill shadow"
            onClick={handleBackHome}
          >
            OK
          </button>
        </div>
      ) : (
        <div
          className="alert alert-danger shadow-sm border-theme-white-2 d-flex justify-content-between align-items-center"
          role="alert"
        >
          <div className="d-flex align-items-center">
            <div
              className="thumb-xs bg-danger rounded-circle d-flex justify-content-center align-items-center me-2"
              style={{ width: '30px', height: '30px' }}
            >
              <i className="fas fa-xmark text-white"></i>
            </div>
            <strong>Payment failed!</strong>
          </div>
          <button
            className="btn btn-success btn-sm px-3 py-1 rounded-pill shadow"
            onClick={handleBackHome}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentSuccess;
