import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  return (
    <div className="row">
      <div className="col-12">
        <div class="row justify-content-center mb-3">
          <div className="col-md-6 d-flex align-items-center">
            <label
              htmlFor="field-select"
              className="col-sm-3 col-form-label text-end pe-2"
            >
              Select Field
            </label>
            <div className="col-sm-7">
              <select className="form-select form-select-sm" id="field-select">
                <option value="1">Field 1</option>
                <option value="2">Field 2</option>
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
              <select className="form-select form-select-sm" id="type-select">
                <option value="1">7</option>
                <option value="2">11</option>
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
              slotDuration="01:00:00" // Hiển thị mỗi giờ một dòng
              height="auto"
              slotLabelContent={(arg) => {
                const allowedHours = [7, 10, 13, 16, 19, 22];
                const hour = arg.date.getHours();
                if (allowedHours.includes(hour)) {
                  return arg.date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true, // Bật định dạng 12 giờ AM/PM
                  });
                }
                return ''; // Ẩn các label không mong muốn
              }}
              events={[
                {
                  title: 'Họp nhóm',
                  start: '2025-03-25T10:00',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
