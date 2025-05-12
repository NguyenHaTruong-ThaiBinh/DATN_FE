import React from 'react';

function DetailMatching({ matchingData }) {
  return (
    <div
      className="modal fade"
      id="detailmatching"
      tabIndex="-1"
      aria-labelledby="detailmatchingLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="detailmatchingLabel">
              Match Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div class="card">
              <div class="card-body bg-black rounded-top">
                <div class="row">
                  <div class="col-4 align-self-center">
                    <img
                      src="assets/images/logo1.png"
                      alt="logo-small"
                      class="logo-sm me-1"
                      height="70"
                    />
                  </div>
                  <div class="col-8 text-end align-self-center"></div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtFirstNameBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Name
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtFirstNameBilling"
                          name="txtFirstNameBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.nameUserA}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtLastNameBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Mobile No.
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtLastNameBilling"
                          name="txtLastNameBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.phoneNumberA}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtCompanyBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Stadium
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtCompanyBilling"
                          name="txtCompanyBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.nameStadium}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtEmailAddressBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Address
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtEmailAddressBilling"
                          name="txtEmailAddressBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.address}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtCityBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Field
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtCityBilling"
                          name="txtCityBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.nameField}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtStateProvinceBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Type
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtStateProvinceBilling"
                          name="txtStateProvinceBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.nameType}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtTelephoneBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Day
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtTelephoneBilling"
                          name="txtTelephoneBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.day}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtFaxBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Time
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtFaxBilling"
                          name="txtFaxBilling"
                          type="text"
                          class="form-control"
                          value={matchingData.time}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtFaxBilling"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Price
                      </label>
                      <div class="col-lg-9">
                        <input
                          id="txtFaxBilling"
                          name="txtFaxBilling"
                          type="text"
                          className="form-control"
                          value={
                            matchingData.price?.toLocaleString('vi-VN') + ' VND'
                          }
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtAddress1Billing"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Note
                      </label>
                      <div class="col-lg-9">
                        <textarea
                          id="txtAddress1Billing"
                          name="txtAddress1Billing"
                          rows="4"
                          class="form-control"
                          value={matchingData.notes}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMatching;
