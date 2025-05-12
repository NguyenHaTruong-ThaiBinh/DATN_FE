import React from 'react';
function FacilityItem({ facility, setFacilityData }) {
  return (
    <>
      <div class="col-md-4 col-lg-4">
        <div class="border-dashed border-theme-color rounded">
          <div class="card bg-light ">
            <div class="card-body border-dashed-bottom border-theme-color">
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
                    data-bs-target="#addbillfacility"
                    onClick={() => {
                      setFacilityData({
                        idFacility: facility.idFacility,
                      });
                    }}
                  >
                    <i class="fas fa-plus me-2"></i> Add
                  </div>
                  <div
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#detailfacility"
                    onClick={() => {
                      setFacilityData({
                        idFacility: facility.idFacility,
                      });
                    }}
                  >
                    <i class="fas fa-eye me-2"></i> View
                  </div>
                  <div
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#editfacility"
                    onClick={() => {
                      setFacilityData({
                        idFacility: facility.idFacility,
                        name: facility.name,
                        usable: facility.usable,
                        inventory: facility.inventory,
                      });
                    }}
                  >
                    <i class="fas fa-times-circle me-2"></i> Edit
                  </div>
                  <div
                    class="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#removefacility"
                    onClick={() => {
                      setFacilityData({
                        idFacility: facility.idFacility,
                        name: facility.name,
                      });
                    }}
                  >
                    <i class="fas fa-trash me-2"></i> Delete
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img
                    src={facility.img}
                    alt=""
                    class="rounded-circle thumb-xxl mx-auto d-inline-block"
                  />
                </div>
                <div class="flex-grow-1 ms-2 text-truncate">
                  <h5 class="m-0 fw-bold">{facility.name}</h5>
                </div>
              </div>
              <div class="row mt-3 align-items-center">
                <div class="col-12">
                  <div className="text-body d-flex align-items-center mb-2">
                    <i className="iconoir-box fs-5 me-2 text-primary"></i>
                    <span className="fw-medium me-1">Inventory:</span>
                    <span>{facility.inventory}</span>
                  </div>
                  <div className="text-body d-flex align-items-center mb-2">
                    <i className="iconoir-tools fs-5 me-2 text-danger"></i>
                    <span className="fw-medium me-1">Damaged:</span>
                    <span>{facility.damaged}</span>
                  </div>
                  <div className="text-body d-flex align-items-center">
                    <i className="iconoir-check fs-5 me-2 text-success"></i>
                    <span className="fw-medium me-1">Usable:</span>
                    <span>{facility.usable}</span>
                  </div>
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
