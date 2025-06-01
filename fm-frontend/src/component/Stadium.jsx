import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Stadium({ field, selectedStadium, setStadiumData, from }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';

  useEffect(() => {
    if (selectedStadium) {
      setPhoneNumber(selectedStadium.phoneNumber);
      setAddress(selectedStadium.address);
      setDistrict(selectedStadium.nameDistrict);
    }
  }, [selectedStadium]);

  const handleEditClick = () => {
    setStadiumData({
      idField: field.idField,
      img: field.img,
      status: field.status,
      name: field.name,
      type: field.nameType,
    });
  };
  const handlePrice = () => {
    setStadiumData({
      idField: field.idField,
      name: field.name,
    });
  };
  const handleEditPrice = () => {
    setStadiumData({
      idField: field.idField,
      name: field.name,
    });
  };
  const handleDelete = () => {
    setStadiumData({
      idField: field.idField,
      name: field.name,
    });
  };
  return (
    <>
      <div class="col-md-6 col-lg-4">
        <div class="card">
          <div class="card-body">
            <div class="">
              <img
                src={field.img}
                alt="img"
                class="img-fluid rounded"
                style={{
                  transform: hover ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
              <div class="mt-3">
                <span
                  className={`badge px-2 py-1 fw-semibold ${
                    field.status === 'ACTIVE'
                      ? 'bg-purple-subtle text-purple'
                      : 'bg-secondary text-light'
                  }`}
                >
                  {field.status}
                </span>{' '}
                |
                <p className="mb-0 text-muted fs-12 d-inline-block">
                  <span className="fw-semibold text-dark me-1">
                    🏟️ Stadium:
                  </span>
                  <span className="text-primary">{field.nameStadium}</span>
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <a
                  href="/"
                  className="d-block fs-22 fw-semibold text-body my-2 text-truncate"
                >
                  <span>⚽</span>
                  {field.name}
                </a>
                <div className="dropdown d-inline-block">
                  <a
                    className="dropdown-toggle arrow-none"
                    id="dLabel11"
                    data-bs-toggle="dropdown"
                    href="/"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="las la-ellipsis-v fs-20 text-muted"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dLabel11"
                  >
                    {isAdmin && (
                      <a
                        className="dropdown-item"
                        href="/"
                        data-bs-toggle="modal"
                        data-bs-target="#editStadium"
                        onClick={handleEditClick}
                      >
                        <i className="fas fa-pen me-2 text-primary"></i> Edit
                        Field
                      </a>
                    )}
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#editPrice"
                      onClick={handlePrice}
                    >
                      <i className="fas fa-eye me-2 text-primary"></i> View
                      Price
                    </a>
                    {isAdmin && (
                      <a
                        className="dropdown-item"
                        href="/"
                        data-bs-toggle="modal"
                        data-bs-target="#editpricefield"
                        onClick={handleEditPrice}
                      >
                        <i className="fas fa-dollar-sign me-2 text-warning"></i>{' '}
                        Edit Price
                      </a>
                    )}
                    {isAdmin && (
                      <a
                        className="dropdown-item"
                        href="/"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteStadium"
                        onClick={handleDelete}
                      >
                        <i className="fas fa-trash-alt me-2 text-danger"></i>{' '}
                        Delete
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <p class="text-muted">
                <span>📍</span> {address} - {district}
              </p>
              <hr class="hr-dashed" />
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      src="assets/images/logo1.png"
                      alt=""
                      class="thumb-md rounded-circle"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2 text-truncate text-start">
                    <p className="mb-0 text-muted">
                      📞<span>{phoneNumber}</span>
                    </p>
                  </div>
                </div>
                <div className="align-self-center">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() =>
                      navigate('/form_booking', {
                        state: {
                          idField: field.idField,
                          name: field.name,
                          type: field.nameType,
                          phoneNumber: selectedStadium.phoneNumber,
                          nameStadium: selectedStadium.name,
                          address: selectedStadium.address,
                          idStadium: selectedStadium.idStadium,
                          from: from,
                        },
                      })
                    }
                  >
                    Booking Now <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stadium;
