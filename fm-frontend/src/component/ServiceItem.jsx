import React from 'react';
function ServiceItem({ service, setServicesData }) {
  return (
    <>
      <div class="col-md-6 col-lg-3">
        <div class="card">
          <div class="card-body">
            <div class="dropdown float-end">
              <a
                href="#"
                class="text-muted fs-16 dropdown-toggle p-1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <div
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#addservice"
                  onClick={() => {
                    setServicesData({
                      id: service.idService,
                    });
                  }}
                >
                  <i class="fas fa-plus me-2"></i> Add
                </div>
                <div
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#detailservice"
                  onClick={() =>
                    setServicesData({
                      id: service.idService,
                    })
                  }
                >
                  <i class="fa-regular fa-eye me-2"></i> View
                </div>
                <div
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#updateservices"
                  onClick={() =>
                    setServicesData({
                      id: service.idService,
                      name: service.name,
                      retailPrice: service.retailPrice,
                      costPrice: service.costPrice,
                      quantity: service.quantity,
                      quantitySold: service.quantitySold,
                    })
                  }
                >
                  <i class="fa-solid fa-broom me-2"></i> Update
                </div>
                <div
                  class="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#removeservice"
                  onClick={() =>
                    setServicesData({
                      id: service.idService,
                      name: service.name,
                    })
                  }
                >
                  <i class="fa-solid fa-trash-can me-2"></i> Delete
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={service.img}
                alt="..."
                style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>

            <h5 class="fw-semibold mt-3 fs-14">{service.name}</h5>
            <div class="d-flex justify-content-between my-2">
              <p class="text-muted mb-0 fs-13 fw-semibold">
                <span class="text-dark">
                  {service.quantity}&nbsp; {service.unit}
                </span>
              </p>
              <p class="text-muted mb-0 fs-13 fw-semibold">
                <span className="text-dark">
                  {Number(service.retailPrice).toLocaleString()}&nbsp;VND/
                  {service.unit}
                </span>
              </p>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-grow-1 text-truncate">
                <div class="d-flex align-items-center">
                  <div
                    class="progress bg-secondary-subtle w-100"
                    style={{ height: '5px' }}
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="progress-bar bg-secondary"
                      style={{ width: '38%' }}
                    ></div>
                  </div>
                  <small class="flex-shrink-1 ms-1">38%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceItem;
