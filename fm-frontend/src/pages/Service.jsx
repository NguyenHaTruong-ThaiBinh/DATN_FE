import React from 'react';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';
import FormService from '../component/FormService';
import ServiceItem from '../component/ServiceItem';
import { fetchDataById } from '../API/Api';
import ModalRemoveServices from '../modal/ModalRemoveServices';
import ModalUpdateServices from '../modal/ModalUpdateServices';

function Service() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  const [idStadium, setIdStadium] = useState('');
  const [listServices, setListServices] = useState([]);
  const [servicesData, setServicesData] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);
  // Hàm toggle menu
  const toggleMenu = () => {
    setSidebarSize((prev) => (prev === 'collapsed' ? 'default' : 'collapsed'));
  };

  // Cập nhật class cho body khi sidebarSize thay đổi
  useEffect(() => {
    document.body.setAttribute('data-sidebar-size', sidebarSize);
  }, [sidebarSize]);
  useEffect(() => {
    if (selectedStadium && selectedStadium.idStadium) {
      setIdStadium(selectedStadium.idStadium);
    }
  }, [selectedStadium]);

  useEffect(() => {
    if (idStadium) {
      fetchDataById('services', idStadium).then((respone) => {
        setListServices(respone.data.result);
      });
    }
  }, [idStadium, isRefresh]);
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
            <RowOne title="Service" />
            <div className="service-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title"></h4>
                </div>
                <div className="col-auto">
                  <button
                    className="btn bg-primary text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#addService"
                  >
                    <i className="fas fa-plus me-1"></i> Add Service
                  </button>
                </div>
              </div>
            </div>
            <div class="row d-flex flex-nowrap overflow-auto">
              {selectedStadium ? (
                listServices
                  .filter((s) => s.enable === 'ENABLE')
                  .map((s, index) => (
                    <ServiceItem
                      key={index}
                      service={s}
                      setServicesData={setServicesData}
                    />
                  ))
              ) : (
                <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
              )}
            </div>
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="clearfix">
                  <div class="btn-group float-end ms-2">
                    <button
                      type="button"
                      class="btn btn-secondary me-0 overflow-hidden"
                    >
                      Upload File
                      <input
                        type="file"
                        name="file"
                        class="overflow-hidden position-absolute top-0 start-0 opacity-0"
                      />
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="las la-angle-down"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#">
                        <i class="las la-file-upload fs-16 me-1 align-text-bottom"></i>{' '}
                        Upload File
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="las la-cloud-upload-alt fs-16 me-1 align-text-bottom"></i>
                        Upload Folder
                      </a>
                    </div>
                  </div>
                  <ul class="nav nav-tabs my-4" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link fw-semibold active py-2"
                        data-bs-toggle="tab"
                        href="#documents"
                        role="tab"
                        aria-selected="true"
                      >
                        <i class="fa-solid fa-futbol me-1"></i> 7vs7{' '}
                        <span class="badge rounded text-blue bg-blue-subtle ms-1">
                          32
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link fw-semibold py-2"
                        data-bs-toggle="tab"
                        href="#images"
                        role="tab"
                        aria-selected="false"
                      >
                        <i class="fa-solid fa-futbol me-11"></i> 11vs11{' '}
                        <span class="badge rounded text-blue bg-blue-subtle ms-1">
                          85
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card">
                  <div class="card-body pt-0">
                    <div class="tab-content">
                      <div
                        class="tab-pane active"
                        id="documents"
                        role="tabpanel"
                      >
                        <div class="table-responsive browser_users">
                          <table class="table mb-0">
                            <thead class="table-light">
                              <tr>
                                <th class="border-top-0">Name Stadium</th>
                                <th class="border-top-0 text-end">
                                  Name Service
                                </th>
                                <th class="border-top-0 text-end">Quantity</th>
                                <th class="border-top-0 text-end">
                                  Total Price
                                </th>
                                <th class="border-top-0 text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Stadium 7</td>
                                <td class="text-end">Water</td>
                                <td class="text-end">5</td>
                                <td class="text-end">500.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stadium 7</td>
                                <td class="text-end">Pit Shirt</td>
                                <td class="text-end">5</td>
                                <td class="text-end">20.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stadium 7</td>
                                <td class="text-end">Shoe Thuong Dinh</td>
                                <td class="text-end">2</td>
                                <td class="text-end">100.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="tab-pane" id="images" role="tabpanel">
                        <div class="table-responsive">
                          <table class="table mb-0">
                            <thead class="table-light">
                              <tr>
                                <th class="border-top-0">Name Stadium</th>
                                <th class="border-top-0 text-end">
                                  Name Service
                                </th>
                                <th class="border-top-0 text-end">Quantity</th>
                                <th class="border-top-0 text-end">
                                  Total Price
                                </th>
                                <th class="border-top-0 text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Stadium 11</td>
                                <td class="text-end">Water</td>
                                <td class="text-end">5</td>
                                <td class="text-end">500.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stadium 11</td>
                                <td class="text-end">Pit Shirt</td>
                                <td class="text-end">5</td>
                                <td class="text-end">20.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>Stadium 11</td>
                                <td class="text-end">Shoe Thuong Dinh</td>
                                <td class="text-end">2</td>
                                <td class="text-end">100.000 VND</td>
                                <td class="text-end">
                                  <a href="#">
                                    <i class="las la-download text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-pen text-secondary fs-18"></i>
                                  </a>
                                  <a href="#">
                                    <i class="las la-trash-alt text-secondary fs-18"></i>
                                  </a>
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
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <FormService
        selectedStadium={selectedStadium}
        setIsRefresh={setIsRefresh}
      />
      <ModalRemoveServices
        servicesData={servicesData}
        setIsRefresh={setIsRefresh}
      />
      <ModalUpdateServices
        servicesData={servicesData}
        setIsRefresh={setIsRefresh}
      />
    </>
  );
}

export default Service;
