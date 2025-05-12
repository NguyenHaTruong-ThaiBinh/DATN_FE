import React, { useState, useEffect } from 'react';

function ModalDetailReport({ selectedReport }) {
  const [nameFacility, setNameFacility] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [day, setDay] = useState('');
  const [nameField, setNameField] = useState('');
  const [quantity, setQuantity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (selectedReport) {
      setNameFacility(selectedReport.nameFacility);
      setNameUser(selectedReport.nameUser);
      setDay(selectedReport.day);
      setNameField(selectedReport.nameField);
      setQuantity(selectedReport.quantity);
      setPhoneNumber(selectedReport.phoneNumber);
      setNote(selectedReport.note);
    }
  }, [selectedReport]);
  return (
    <div
      className="modal fade"
      id="detailreport"
      tabIndex="-1"
      aria-labelledby="detailreportLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '60%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="detailreportLabel">
              Detail Report
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
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane active" id="step1">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row mb-2">
                          <label
                            for="txtFirstNameBilling"
                            class="col-lg-3 col-form-label text-end"
                          >
                            Employee
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtFirstNameBilling"
                              name="txtFirstNameBilling"
                              type="text"
                              class="form-control"
                              value={nameUser}
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
                            Telephone
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtLastNameBilling"
                              name="txtLastNameBilling"
                              type="text"
                              class="form-control"
                              value={phoneNumber}
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
                            Facility
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtCompanyBilling"
                              name="txtCompanyBilling"
                              type="text"
                              class="form-control"
                              value={nameFacility}
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
                            Quantity
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtEmailAddressBilling"
                              name="txtEmailAddressBilling"
                              type="text"
                              class="form-control"
                              value={quantity}
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
                            Position
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtTelephoneBilling"
                              name="txtTelephoneBilling"
                              type="text"
                              class="form-control"
                              value={nameField}
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
                            Day
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtFaxBilling"
                              name="txtFaxBilling"
                              type="text"
                              class="form-control"
                              value={day}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
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
                              value={note}
                            ></textarea>
                          </div>
                        </div>
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

export default ModalDetailReport;
