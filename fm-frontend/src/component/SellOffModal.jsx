import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchDataById, postFormData } from '../API/Api';
import Cookies from 'js-cookie'

function SellOffModal({ selectedReport, setIsRefresh }) {
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [idReportFacility, setIdReportFacility] = useState('');
  const [nameFacility, setNameFacility] = useState('');
  const [nameField, setNameField] = useState('');
  const [note, setNote] = useState('');

  //lấy idUser trên localstorage
  const idUser = Cookies.get('idUser');
  const [user, setUser] = useState([]);
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
      setNote(selectedReport.note);
    }
  }, [selectedReport]);

  //handle Reset
  const handleReset = () => {
    setPrice('');
    setQuantity('');
  };

  useEffect(() => {
    const modal = document.getElementById('selloffmodal');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);

  //handle Save
  const handleSave = async () => {
    if (!price || !quantity) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idReportFacility', idReportFacility);
    formData.append('idUser', idUser);
    formData.append('quantity', quantity);
    formData.append('price', price);
    try {
      await postFormData('selloff', formData);
      toast.success('Post successfull!');
      document
        .querySelector('#selloffmodal [data-bs-dismiss="modal"]')
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
      id="selloffmodal"
      tabIndex="-1"
      aria-labelledby="selloffmodalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: '50%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="selloffmodalLabel">
              Sell-Off Confirmation
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
                    <h4 class="card-title my-4  fs-15">
                      Dispose of{' '}
                      <span style={{ color: '#dc3545', fontWeight: 'bold' }}>
                        {nameFacility}
                      </span>
                    </h4>
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
                              value={user.name}
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
                              value={user.phoneNumber}
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
                            Positon
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtEmailAddressBilling"
                              name="txtEmailAddressBilling"
                              type="text"
                              class="form-control"
                              value={nameField}
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
                            Quantity
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtCityBilling"
                              name="txtCityBilling"
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
                            for="txtStateProvinceBilling"
                            class="col-lg-3 col-form-label text-end"
                          >
                            Price
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtStateProvinceBilling"
                              name="txtStateProvinceBilling"
                              type="number"
                              class="form-control"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row mb-2">
                          <label
                            for="txtStateProvinceBilling"
                            class="col-lg-3 col-form-label text-end"
                          >
                            Day
                          </label>
                          <div class="col-lg-9">
                            <input
                              id="txtStateProvinceBilling"
                              name="txtStateProvinceBilling"
                              type="date"
                              value={today}
                              class="form-control"
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

export default SellOffModal;
