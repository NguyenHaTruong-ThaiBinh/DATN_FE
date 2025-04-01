import React from 'react';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';
import OpponentModal from '../component/OpponentModal';
import FormRequest from '../component/FormRequest';

function Matching() {
  const [sidebarSize, setSidebarSize] = useState('default');

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
      <HeaderComponnent onToggleMenu={toggleMenu} />
      <LeftMenuComponnent />
      <div className="startbar-overlay d-print-none"></div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <RowOne title="Matching" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">
                          ⚽⚽
                        </h4>
                      </div>
                      <div className="col-auto">
                        <button
                          className="btn bg-primary text-white"
                          data-bs-toggle="modal"
                          data-bs-target="#opponentModal"
                        >
                          <i className="fas fa-plus me-1"></i> Find Opponent
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center mb-3">
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
                  <div class="card">
                    <div class="card-body pt-0">
                      <div class="table-responsive-sm">
                        <table class="table mb-0">
                          <thead class="table-light">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Phone Number</th>
                              <th scope="col">Field</th>
                              <th scope="col">Type</th>
                              <th scope="col">Time</th>
                              <th scope="col">Day</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="table-primary">
                              <th scope="row">1</th>
                              <td class="">Mark</td>
                              <td class="">0393878300</td>
                              <td class="">Field 1 - YenHoa</td>
                              <td class="">7</td>
                              <td class="">7:00 PM</td>
                              <td class="">25/09/2025</td>
                              <td class="">
                                {' '}
                                <button
                                  type="button"
                                  class="btn btn-success btn-sm"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModalSuccess"
                                >
                                  Accept
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <OpponentModal />
      <FormRequest />
    </>
  );
}

export default Matching;
