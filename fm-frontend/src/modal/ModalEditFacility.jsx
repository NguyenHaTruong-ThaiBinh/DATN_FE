import React, { useState, useEffect } from 'react';
import { updateServiceOrderByIdServiceOrder } from '../API/Api';
import { toast } from 'react-toastify';

function ModalEditFacility({ facilityData, setIsRefresh }) {
  const [usable, setUsable] = useState('');
  const [inventory, setInventory] = useState('');
  const [name, setName] = useState('');
  const [idFacility, setIdFacility] = useState('');

  useEffect(() => {
    if (facilityData) {
      setUsable(facilityData.usable);
      setInventory(facilityData.inventory);
      setName(facilityData.name);
      setIdFacility(facilityData.idFacility);
    }
  }, [facilityData]);

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('usable', usable);
    try {
      await updateServiceOrderByIdServiceOrder(
        'facility',
        idFacility,
        formData
      );
      setIsRefresh((prev) => !prev);
      document
        .querySelector('#editfacility [data-bs-dismiss="modal"]')
        ?.click();
      toast.success('Update Successfull!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Update false!');
      document
        .querySelector('#editfacility [data-bs-dismiss="modal"]')
        ?.click();
    }
  };
  return (
    <div
      className="modal fade"
      id="editfacility"
      tabIndex="-1"
      aria-labelledby="editFacilityLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editFacilityLabel">
              Edit Facility
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card-body pt-0">
              <form>
                <div class="mb-3 row">
                  <label for="horizontalInput1" class="col-sm-2 col-form-label">
                    ID
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={idFacility}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="horizontalInput1" class="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={name}
                      readOnly
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="horizontalInput2" class="col-sm-2 col-form-label">
                    Usable
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      id="horizontalInput2"
                      value={usable}
                      onChange={(e) => setUsable(e.target.value)}
                    />
                  </div>
                  <small id="emailHelp" class="form-text text-muted">
                    Please fill in the completed quantity!
                  </small>
                </div>
                <div class="mb-3 row">
                  <label for="horizontalInput2" class="col-sm-2 col-form-label">
                    Inventory
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="number"
                      class="form-control"
                      id="horizontalInput2"
                      value={inventory}
                      readOnly
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleUpdate}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditFacility;
