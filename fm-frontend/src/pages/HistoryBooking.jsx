import { useState, useEffect } from 'react';
import InvoiceModal from '../component/InvoiceModal';
import CancelStadium from '../component/CancelStadium';
import ModalAddService from '../modal/ModalAddService';
import {
  fetchBookingById,
  fetchData,
  fetchDataByUser,
} from '../API/Api';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import Cookies from 'js-cookie';

function HistoryBooking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Booking'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();
  const [listTime, setListTime] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [listBooking, setListBooking] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isFresh, setIsFresh] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const role = Cookies.get('role');
  const isAdmin = role === 'ADMIN';
  const idUser = Cookies.get('idUser');

  useEffect(() => {
    fetchData('time')
      .then((respone) => {
        setListTime(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //lấy booking theo idStadium

  useEffect(() => {
    if (selectedStadium) {
      const idStadium = selectedStadium.idStadium;
      if (isAdmin) {
        fetchBookingById('booking', idStadium)
          .then((respone) => {
            setListBooking(respone.data.result);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        fetchDataByUser('booking', idStadium, idUser)
          .then((respone) => {
            setListBooking(respone.data.result);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, [selectedStadium, isFresh, idUser, isAdmin]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
    setSelectedDate(formattedDate);
  }, []);

  //lọc các giá trị phù hợp với time và date
  const filteredBooking = listBooking.filter((booking) => {
    const matchTime = selectedTime ? booking.time === selectedTime : true;
    const matchDate = selectedDate ? booking.day === selectedDate : true;
    return matchDate && matchTime;
  });
  return (
    <>
      <div className="row align-items-center">
        {/* Cột chọn Date */}
        <div className="col-md-6 d-flex align-items-center">
          <label
            htmlFor="date-input"
            className="col-sm-3 col-form-label text-end pe-2"
          >
            Date
          </label>
          <div className="col-sm-7">
            <input
              className="form-control form-control-sm"
              type="date"
              id="date-input"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        {/* Cột chọn Time */}
        <div className="col-md-6 d-flex align-items-center">
          <label
            htmlFor="time-select"
            className="col-sm-3 col-form-label text-end pe-2"
          >
            Select Time
          </label>
          <div className="col-sm-7">
            <select
              className="form-select form-select-sm"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Time</option>
              {listTime.map((item, index) => (
                <option key={item.idTime} value={item.time}>
                  {item.time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <table className="table table-bordered mb-0 table-centered text-center">
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: '20%' }}>Name Field</th>
            <th style={{ width: '13%' }}>Type</th>
            <th style={{ width: '13%' }}>Time</th>
            <th style={{ width: '13%' }}>Day</th>
            <th style={{ width: '13%' }}>Payment Status</th>
            <th style={{ width: '13%' }} className="text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBooking.map((booking, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{booking.nameField}</td>
              <td>{booking.nameType}</td>
              <td>{booking.time}</td>
              <td>{booking.day}</td>
              <td>
                <span
                  className={`badge ${
                    booking.paymentStatus === 'PAID'
                      ? 'bg-success'
                      : 'bg-danger'
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </td>
              <td className="text-end">
                <div className="dropdown d-inline-block">
                  <a
                    className="dropdown-toggle arrow-none"
                    id="dLabel11"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="las la-ellipsis-v fs-20 text-muted"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dLabel11"
                  >
                    <button
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#modaladdservice"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setIsFresh((prev) => !prev);
                      }}
                    >
                      <i className="fas fa-edit me-2 text-primary"></i> Add
                      Services
                    </button>
                    <button
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelStadium"
                      onClick={() => {
                        setSelectedBooking(booking);
                      }}
                    >
                      <i className="fas fa-times-circle me-2 text-danger"></i>{' '}
                      Cancel
                    </button>
                    <button
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#invoice"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setIsFresh((prev) => !prev);
                      }}
                    >
                      <i className="fas fa-info-circle me-2 text-info"></i>{' '}
                      Detail
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <InvoiceModal
        booking={selectedBooking}
        isFresh={isFresh}
        selectedStadium={selectedStadium}
      />
      <CancelStadium booking={selectedBooking} setIsFresh={setIsFresh} />
      <ModalAddService
        selectedStadium={selectedStadium}
        booking={selectedBooking}
        isFresh={isFresh}
      />
    </>
  );
}

export default HistoryBooking;
