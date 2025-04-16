import React from 'react';
import { useState, useEffect } from 'react';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import InvoiceModal from '../component/InvoiceModal';
import CancelStadium from '../component/CancelStadium';
import ModalAddService from '../modal/ModalAddService';

function HistoryBooking() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  // Hàm toggle menu
  const toggleMenu = () => {
    setSidebarSize((prev) => (prev === 'collapsed' ? 'default' : 'collapsed'));
  };

  // Cập nhật class cho body khi sidebarSize thay đổi
  useEffect(() => {
    document.body.setAttribute('data-sidebar-size', sidebarSize);
  }, [sidebarSize]);

  return (
    <>
      <HeaderComponnent
        onToggleMenu={toggleMenu}
        selectedStadium={selectedStadium}
        setSelectedStadium={setSelectedStadium}
      />
      <LeftMenuComponnent />
      <div className="startbar-overlay d-print-none"></div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <RowOne title="Booking History" />
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
                    id="time-select"
                  >
                    <option defaultValue>Time</option>
                    <option value="1">7:00 AM</option>
                    <option value="2">10:00 AM</option>
                    <option value="3">1:00 PM</option>
                    <option value="4">4:00 PM</option>
                    <option value="5">7:00 PM</option>
                    <option value="6">10:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <table className="table table-bordered mb-0 table-centered text-center">
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Name Stadium</th>
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
                <tr>
                  <td>Stadium 1</td>
                  <td>7</td>
                  <td>19:00 AM</td>
                  <td>25/09/2025</td>
                  <td>
                    <span className="badge bg-success">Done</span>
                  </td>
                  <td className="text-end">
                    <div className="dropdown d-inline-block">
                      <a
                        className="dropdown-toggle arrow-none"
                        id="dLabel11"
                        data-bs-toggle="dropdown"
                        href="#a"
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
                        <a
                          className="dropdown-item"
                          href="#a"
                          data-bs-toggle="modal"
                          data-bs-target="#modaladdservice"
                        >
                          <i className="fas fa-edit me-2 text-primary"></i> Add
                          Services
                        </a>
                        <a
                          className="dropdown-item"
                          href="#a"
                          data-bs-toggle="modal"
                          data-bs-target="#cancelStadium"
                        >
                          <i className="fas fa-times-circle me-2 text-danger"></i>{' '}
                          Cancel
                        </a>
                        <a
                          className="dropdown-item"
                          href="#a"
                          data-bs-toggle="modal"
                          data-bs-target="#invoice"
                        >
                          <i className="fas fa-info-circle me-2 text-info"></i>{' '}
                          Detail
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <InvoiceModal />
      <CancelStadium />
      <ModalAddService />
    </>
  );
}

export default HistoryBooking;
