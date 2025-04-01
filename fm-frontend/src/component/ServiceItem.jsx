import React from "react";
function ServiceItem() {
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
                <a class="dropdown-item" href="#">
                  View Detail
                </a>
                <a class="dropdown-item" href="#">
                  Clear All
                </a>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
              </div>
            </div>
            <img
              src="assets/images/logos/lang-logo/lavie.png"
              class="me-2 align-self-center thumb-xl"
              alt="..."
            />
            <h5 class="fw-semibold mt-3 fs-14">Water</h5>
            <div class="d-flex justify-content-between my-2">
              <p class="text-muted mb-0 fs-13 fw-semibold">
                <span class="text-dark">34 </span>Bin
              </p>
              <p class="text-muted mb-0 fs-13 fw-semibold">
                <span class="text-dark">500 </span>VND/Bin
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
