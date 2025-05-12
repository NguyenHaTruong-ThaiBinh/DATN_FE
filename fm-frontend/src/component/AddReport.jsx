import React, { useEffect, useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { fetchDataById, getDataByIdStadium, postFormData } from '../API/Api';
import { toast } from 'react-toastify';

function AddReport({ selectedStadium, setIsRefresh, isRefresh }) {
  const [listField, setListField] = useState([]);
  const [listFacility, setListFacility] = useState([]);
  const [idStadium, setIdStadium] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedFacility, setSelectedFacility] = useState('');
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [user, setUser] = useState('');
  const idUser = localStorage.getItem('idUser');

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
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);
  //lấy facility enable theo idStadium
  useEffect(() => {
    if (idStadium) {
      fetchDataById('facility', idStadium)
        .then((respone) => {
          setListFacility(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, isRefresh]);

  //lấy field enable theo idStadium
  useEffect(() => {
    if (idStadium) {
      getDataByIdStadium('field', idStadium, 'ListType7')
        .then((respone) => {
          setListField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium]);
  const handleReset = () => {
    setSelectedFacility('');
    setSelectedField('');
    setQuantity('');
    setNote('');
  };

  useEffect(() => {
    const modal = document.getElementById('addreport');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);
  //handle
  const handleSave = async () => {
    if (!quantity || !selectedField || !selectedFacility) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idFacility', selectedFacility);
    formData.append('quantity', quantity);
    formData.append('idField', selectedField);
    formData.append('idUser', idUser);
    formData.append('note', note);
    try {
      await postFormData('reportfacility', formData);
      toast.success('Post successfull!');
      document.querySelector('#addreport [data-bs-dismiss="modal"]')?.click();
      handleReset();
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
      id="addreport"
      tabIndex="-1"
      aria-labelledby="addreportLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '50%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addreportLabel">
              <FaClipboardList className="me-2" /> Add Report
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
                        <select
                          className="form-select"
                          value={selectedFacility}
                          onChange={(e) => setSelectedFacility(e.target.value)}
                        >
                          <option value="">...</option>
                          {listFacility.map((item, index) => (
                            <option key={index} value={item.idFacility}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtEmailAddressShipping"
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
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group row mb-2">
                      <label
                        for="txtCityShipping"
                        class="col-lg-3 col-form-label text-end"
                      >
                        Position
                      </label>
                      <div class="col-lg-9">
                        <select
                          className="form-select"
                          value={selectedField}
                          onChange={(e) => setSelectedField(e.target.value)}
                        >
                          <option value="">...</option>
                          {listField.map((item, index) => (
                            <option key={index} value={item.idField}>
                              {item.name}
                            </option>
                          ))}
                        </select>
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
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          class="form-control"
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

export default AddReport;
