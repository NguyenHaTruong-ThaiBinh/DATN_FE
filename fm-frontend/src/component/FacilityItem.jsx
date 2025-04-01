import React from 'react';
function FacilityItem() {
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
                  <i class="fas fa-eye me-2"></i> View Detail
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-times-circle me-2"></i> Edit
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-trash me-2"></i> Delete
                </a>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <img
                src="assets/images/logos/lang-logo/dropbox.png"
                class="me-2 align-self-center thumb-xl"
                alt="..."
              />
            </div>
            <h5 class="fw-semibold mt-3 fs-3 text-center">Đèn Sân</h5>
            <div class="d-flex justify-content-between my-2">
              <table class="table table-sm mb-0">
                <thead class="table-light">
                  <tr>
                    <th scope="col" class="text-center">
                      Inventory
                    </th>
                    <th scope="col" class="text-center">
                      Damaged
                    </th>
                    <th scope="col" class="text-center">
                      Usable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center">10</td>
                    <td class="text-center">20</td>
                    <td class="text-center">30</td>
                  </tr>
                </tbody>
              </table>
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
                      style={{ width: '15%' }}
                    ></div>
                  </div>
                  <small class="flex-shrink-1 ms-1">15%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilityItem;
