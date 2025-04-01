import React from 'react';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';
import FacilityItem from '../component/FacilityItem';
import FacilityModal from '../component/FacilityModal';
import CompleteModal from '../component/CompleteModal';
import SellOffModal from '../component/SellOffModal';
import AddReport from '../component/AddReport';

function Facility() {
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
            <RowOne title="Facility" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="facility-header">
                    <div className="row align-items-center">
                      <div className="col"></div>
                      <div className="col-auto">
                        <button
                          className="btn bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                          data-bs-toggle="modal"
                          data-bs-target="#facilitymodal"
                          style={{
                            width: '40px',
                            height: '40px',
                            padding: '0',
                          }} // Điều chỉnh kích thước nút
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row d-flex flex-nowrap overflow-auto">
                    <FacilityItem />
                  </div>
                  <div class="row justify-content-center">
                    <div class="card">
                      <div class="card-body pt-0">
                        <ul class="nav nav-pills nav-justified" role="tablist">
                          <li class="nav-item waves-effect waves-light">
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#home-1"
                              role="tab"
                              aria-selected="true"
                            >
                              Report
                            </a>
                          </li>
                          <li class="nav-item waves-effect waves-light">
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#profile-1"
                              role="tab"
                              aria-selected="false"
                            >
                              Sell-off
                            </a>
                          </li>
                        </ul>
                        <div class="tab-content">
                          {/* report */}
                          <div
                            class="tab-pane p-3 active"
                            id="home-1"
                            role="tabpanel"
                          >
                            <div className="row align-items-center">
                              <div className="row align-items-center mb-3">
                                <div className="col"></div>
                                <div className="col-auto">
                                  <button
                                    className="btn bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addreport"
                                    style={{
                                      width: '40px',
                                      height: '40px',
                                      padding: '0',
                                    }} // Điều chỉnh kích thước nút
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                              <table class="table table-bordered mb-0 table-centered">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Position</th>
                                    <th>Quantity</th>

                                    <th>Order Status</th>
                                    <th class="text-end">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Đèn Sân</td>
                                    <td>25/11/2018</td>
                                    <td>Field 1</td>
                                    <td>20</td>
                                    <td>
                                      <span class="badge bg-danger">
                                        Damaged
                                      </span>
                                    </td>
                                    <td class="text-end">
                                      <div class="dropdown d-inline-block">
                                        <a
                                          class="dropdown-toggle arrow-none"
                                          id="dLabel11"
                                          data-bs-toggle="dropdown"
                                          href="#"
                                          role="button"
                                          aria-haspopup="false"
                                          aria-expanded="false"
                                        >
                                          <i class="las la-ellipsis-v fs-20 text-muted"></i>
                                        </a>
                                        <div
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="dLabel11"
                                        >
                                          <a
                                            class="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#compeletemodal"
                                          >
                                            <i class="fas fa-check-circle fa-fw me-2 text-success"></i>{' '}
                                            Completed
                                          </a>
                                          <a
                                            class="dropdown-item"
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#selloffmodal"
                                          >
                                            <i class="fas fa-dollar-sign fa-fw me-2 text-warning"></i>{' '}
                                            Sell-off
                                          </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {/* sell-off */}
                          <div
                            class="tab-pane p-3"
                            id="profile-1"
                            role="tabpanel"
                          >
                            <table class="table table-bordered mb-0 table-centered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Date</th>
                                  <th>Position</th>
                                  <th>Quantity</th>

                                  <th>Order Status</th>
                                  <th class="text-end">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Đèn Sân</td>
                                  <td>25/11/2018</td>
                                  <td>Field 1</td>
                                  <td>20</td>
                                  <td>
                                    <span class="badge bg-danger">Damaged</span>
                                  </td>
                                  <td class="text-end">
                                    {' '}
                                    <button
                                      type="button"
                                      class="btn btn-success btn-sm"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModalSuccess"
                                    >
                                      Sell-off
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
            </div>
          </div>
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <FacilityModal />
      <CompleteModal />
      <SellOffModal />
      <AddReport/>
    </>
  );
}

export default Facility;
