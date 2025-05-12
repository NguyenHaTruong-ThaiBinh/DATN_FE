import React, { useState, useEffect } from 'react';
import { fetchDataById, postFormData } from '../API/Api';
import { toast } from 'react-toastify';

function CompleteModal({ selectedReport, setIsRefresh }) {
  const [idReportFacility, setIdReportFacility] = useState('');
  const [nameFacility, setNameFacility] = useState('');
  const [nameField, setNameField] = useState('');
  const [user, setUser] = useState('');
  const idUser = localStorage.getItem('idUser');
  const today = new Date().toISOString().split('T')[0];
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  //lấy thông tin của User
  useEffect(() => {
    if (idUser) {
      fetchDataById('users', idUser)
        .then((respone) => {
          setUser(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idUser]);

  useEffect(() => {
    if (selectedReport) {
      setIdReportFacility(selectedReport.idReportFacility);
      setNameFacility(selectedReport.nameFacility);
      setNameField(selectedReport.nameField);
    }
  }, [selectedReport]);
  //handle Reset
  const handleReset = () => {
    setPrice('');
    setQuantity('');
  };

  useEffect(() => {
    const modal = document.getElementById('compeletemodal');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);
  //handle
  const handleSave = async () => {
    if (!idReportFacility || !price || !quantity) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idReportFacility', idReportFacility);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('idUser', idUser);
    try {
      await postFormData('reportrepair', formData);
      toast.success('Post successfull!');
      document
        .querySelector('#compeletemodal [data-bs-dismiss="modal"]')
        ?.click();
      setIsRefresh((prev) => !prev);
    } catch (error) {
      console.error('Error: ', error); // Log chi tiết để dev xem
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Thông báo lỗi từ server
      } else {
        toast.error('An unexpected error occurred!'); // Lỗi không rõ
      }
    }
  };
  return (
    <div
      className="modal fade"
      id="compeletemodal"
      tabIndex="-1"
      aria-labelledby="compeletemodalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '50%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="compeletemodalLabel">
              Repair
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
                <small id="emailHelp" class="form-text text-muted">
                  Please fill in the completed quantity of{' '}
                  <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                    {nameFacility}
                  </span>{' '}
                  for{' '}
                  <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                    {nameField}
                  </span>
                  !
                </small>
                <span></span>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtFirstNameShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Employee
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtFirstNameShipping"
                            name="txtFirstNameShipping"
                            type="text"
                            value={user.name}
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtLastNameShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Telephone
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtLastNameShipping"
                            name="txtLastNameShipping"
                            type="number"
                            value={user.phoneNumber}
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtCompanyShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Facility
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtLastNameShipping"
                            name="txtLastNameShipping"
                            type="text"
                            value={nameFacility}
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtStateProvinceShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Date
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtStateProvinceShipping"
                            name="txtStateProvinceShipping"
                            type="date"
                            class="form-control"
                            value={today}
                            readOnly
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtCityShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Quantity
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtEmailAddressShipping"
                            name="txtEmailAddressShipping"
                            type="number"
                            class="form-control"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row mb-2">
                        <label
                          for="txtEmailAddressShipping"
                          class="col-lg-3 col-form-label text-end"
                        >
                          Price
                        </label>
                        <div class="col-lg-9">
                          <input
                            id="txtEmailAddressShipping"
                            name="txtEmailAddressShipping"
                            type="number"
                            class="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
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
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteModal;
