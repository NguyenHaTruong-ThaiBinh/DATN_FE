import { useEffect, useState } from 'react';
import { updateServiceOrderByIdServiceOrder } from '../API/Api';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

function MatchItem({ matching, setMatchingData, setIsRefresh }) {
  const [idMatching, setIdMatching] = useState('');
  const idUser = Cookies.get('idUser');

  const handleAccept = async () => {
    const formData = new FormData();
    formData.append('idUserB', idUser);
    try {
      await updateServiceOrderByIdServiceOrder(
        'matching',
        idMatching,
        formData
      );
      toast.success('Accept Successfull!');
      setIsRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update false!');
    }
  };

  useEffect(() => {
    if (matching) {
      setIdMatching(matching.idMatching);
    }
  }, [matching]);
  return (
    <div className="card mb-3">
      <div className="card-body">
        {/* Ngày tháng */}
        <div className="mb-3">
          <h5 className="text-muted m-0">{matching.day}</h5>
        </div>

        {/* Nội dung chính */}
        <div className="row align-items-center">
          <div className="col-md-10">
            <div className="text-decoration-none">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src="assets/images/users/slack.png"
                    alt="Avatar"
                    className="thumb-lg rounded-circle"
                  />
                </div>
                <div className="flex-grow-1 ms-3 text-truncate">
                  <h6 className="my-1 fw-medium text-dark fs-14 d-flex align-items-center">
                    <span className="text-pink bg-pink-subtle py-0 px-1 rounded fw-medium d-inline-block">
                      {matching.nameField}
                    </span>
                    <small className="text-muted ps-2">{matching.time}</small>
                  </h6>
                  <p className="text-muted mb-0">
                    Mobile No: {matching.phoneNumberA}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button actions */}
          <div className="col-md-2 text-end mt-3 mt-md-0">
            <button
              type="button"
              className="btn btn-success btn-sm me-2"
              onClick={handleAccept}
            >
              <i className="fas fa-check"></i> Accept
            </button>
            <button
              type="button"
              className="btn btn-light text-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#detailmatching"
              onClick={() => {
                setMatchingData(matching);
              }}
            >
              <i className="fas fa-eye"></i>
            </button>
            <button
              type="button"
              className="btn btn-light text-secondary btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#removematching"
              onClick={() => {
                setMatchingData(matching);
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchItem;
