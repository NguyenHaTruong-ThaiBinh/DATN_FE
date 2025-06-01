import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useDispatch } from 'react-redux';
import { updateTitleHeader } from '../redux/slice/TitleSlice';
import {
  fetchData,
  fetchDataByIdStadiumAndIdTypeAndEnable,
  getBookingByIdField,
} from '../API/Api';
import { toast } from 'react-toastify';
import { useOutletContext } from 'react-router-dom';

function Calendar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHeader('Calendar'));
  }, [dispatch]);
  const { selectedStadium } = useOutletContext();
  const [listType, setListType] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [idStadium, setIdStadium] = useState('');
  const [listField, setListField] = useState([]);
  const [selectedField, setSelectedField] = useState('');
  const [listBooking, setListBooking] = useState([]);

  useEffect(() => {
    if (selectedStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

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

  // Lấy danh sách booking theo sân
  useEffect(() => {
    if (selectedField) {
      getBookingByIdField('booking', selectedField)
        .then((respone) => {
          setListBooking(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedField]);

  // Chuyển listBooking sang dạng sự kiện cho FullCalendar
  const bookingEvents = listBooking.map((booking) => ({
    title: `${booking.nameUser} - ${booking.nameField}`,
    start: `${booking.day}T${booking.time}`,
    extendedProps: {
      paymentStatus: booking.paymentStatus,
      totalPrice: booking.totalPrice,
      phoneNumberUser: booking.phoneNumberUser,
      nameStadium: booking.nameStadium,
    },
  }));

  return (
    <div className="row">
      <div className="col-12">
        <div className="row justify-content-center mb-3">
          <div className="col-md-6 d-flex align-items-center">
            <label
              htmlFor="field-select"
              className="col-sm-3 col-form-label text-end pe-2"
            >
              Select Field
            </label>
            <div className="col-sm-7">
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
          <div className="col-md-6 d-flex align-items-center">
            <label
              htmlFor="time-select"
              className="col-sm-3 col-form-label text-end pe-2"
            >
              Select Type
            </label>
            <div className="col-sm-7">
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
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <FullCalendar
              plugins={[timeGridPlugin]}
              initialView="timeGridWeek"
              locale="en"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek',
              }}
              slotMinTime="07:00:00"
              slotMaxTime="23:00:00"
              slotDuration="01:00:00"
              height="auto"
              slotLabelContent={(arg) => {
                const allowedHours = [7, 10, 13, 16, 19, 22];
                const hour = arg.date.getHours();
                if (allowedHours.includes(hour)) {
                  return arg.date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  });
                }
                return '';
              }}
              events={bookingEvents}
              eventClick={(info) => {
                toast.success(
                  `Phone Number: ${info.event.extendedProps.phoneNumberUser}`
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
