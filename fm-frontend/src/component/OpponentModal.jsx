import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import {
  fetchData,
  fetchDataById,
  fetchDataByIdStadiumAndIdTypeAndEnable,
  postFormData,
} from '../API/Api';

function OpponentModal({ selectedStadium, setIsRefresh }) {
  const [listType, setListType] = useState([]);
  const [listField, setListField] = useState([]);
  const [idStadium, setIdStadium] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [listTime, setListTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [day, setDay] = useState('');
  const [notes, setNotes] = useState('');
  const [user, setUser] = useState('');
  const idUser = Cookies.get('idUser');

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

  const handleReset = () => {
    setSelectedField('');
    setSelectedType('');
    setSelectedTime('');
    setDay('');
    setNotes('');
  };
  useEffect(() => {
    const modal = document.getElementById('opponentModal');
    modal.addEventListener('hidden.bs.modal', handleReset);
    return () => {
      modal.removeEventListener('hidden.bs.modal', handleReset);
    };
  }, []);

  //lấy idStadium
  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);
  //lấy danh sách time ra
  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // Lấy danh sách loại sân
  useEffect(() => {
    fetchData('type')
      .then((respone) => {
        setListType(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Lấy danh sách sân theo loại và id sân
  useEffect(() => {
    if (selectedType && idStadium) {
      fetchDataByIdStadiumAndIdTypeAndEnable('field', idStadium, selectedType)
        .then((respone) => {
          setListField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idStadium, selectedType]);

  //handle
  const handleSave = async () => {
    if (!selectedTime || !selectedField || !day || !notes) {
      toast.error('Please fill in all information!');
      return;
    }
    const formData = new FormData();
    formData.append('idUserA', idUser);
    formData.append('idField', selectedField);
    formData.append('day', day);
    formData.append('idTime', selectedTime);
    formData.append('notes', notes);
    try {
      await postFormData('matching', formData);
      toast.success('Post successfull!');
      document
        .querySelector('#opponentModal [data-bs-dismiss="modal"]')
        ?.click();
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
      id="opponentModal"
      tabIndex="-1"
      aria-labelledby="opponentModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title" id="opponentModalTitle">
              Opponent Modal
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtFirstNameShipping" className="form-label">
                    Name
                  </label>
                  <input
                    id="txtFirstNameShipping"
                    name="txtFirstNameShipping"
                    type="text"
                    className="form-control"
                    value={user.name}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="txtLastNameShipping" className="form-label">
                    Mobile No
                  </label>
                  <input
                    id="txtLastNameShipping"
                    name="txtLastNameShipping"
                    type="text"
                    className="form-control"
                    value={user.phoneNumber}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtCompanyShipping" className="form-label">
                    Type
                  </label>
                  <select
                    className="form-select form-select-sm"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">...</option>
                    {listType.map((item, index) => (
                      <option key={index} value={item.idType}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="txtEmailAddressShipping"
                    className="form-label"
                  >
                    Field
                  </label>
                  <select
                    className="form-select form-select-sm"
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
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtFirstNameShipping" className="form-label">
                    Day
                  </label>
                  <input
                    id="txtFirstNameShipping"
                    name="txtFirstNameShipping"
                    type="date"
                    className="form-control"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="txtLastNameShipping" className="form-label">
                    Time
                  </label>
                  <select
                    className="form-select form-select-sm"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">...</option>
                    {listTime.map((item, index) => (
                      <option key={index} value={item.idTime}>
                        {item.time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="txtFirstNameShipping" className="form-label">
                    Notes
                  </label>
                  <div class="col-lg-9">
                    <textarea
                      id="txtAddress1Billing"
                      name="txtAddress1Billing"
                      placeholder="Enter Note"
                      rows="4"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      class="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6"></div>
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

export default OpponentModal;
