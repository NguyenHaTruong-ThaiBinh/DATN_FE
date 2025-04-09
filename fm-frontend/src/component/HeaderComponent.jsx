import React, { useState, useEffect } from 'react';
import { fetchData } from '../API/Api';

const HeaderComponent = ({
  onToggleMenu,
  selectedStadium,
  setSelectedStadium,
}) => {
  const [stadiums, setStadiums] = useState([]);
  useEffect(() => {
    fetchData('stadium')
      .then((response) => {
        const stadiumList = response.data.result || [];
        setStadiums(stadiumList);
        if (stadiumList.length > 0 && !selectedStadium) {
          setSelectedStadium(stadiumList[0]); // Thiết lập mặc định nếu chưa có
        }
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      });
  }, []);

  const handleStadiumChange = (stadium) => {
    setSelectedStadium(stadium);
  };

  return (
    <div className="topbar d-print-none">
      <div className="container-fluid">
        <nav
          className="topbar-custom d-flex justify-content-between"
          id="topbar-custom"
        >
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li>
              <button
                className="nav-link mobile-menu-btn nav-icon"
                id="togglemenu"
                onClick={onToggleMenu}
              >
                <i className="iconoir-menu"></i>
              </button>
            </li>
          </ul>
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none nav-icon"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                data-bs-offset="0,19"
              >
                {selectedStadium && (
                  <img
                    src={selectedStadium.img}
                    alt={selectedStadium.name}
                    className="thumb-sm rounded-circle"
                  />
                )}
              </a>
              <div className="dropdown-menu">
                {stadiums.map((stadium, index) => (
                  <a
                    key={index}
                    className="dropdown-item"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleStadiumChange(stadium);
                    }}
                  >
                    <img
                      src={stadium.img}
                      alt={stadium.name}
                      height="15"
                      className="me-2"
                    />
                    {stadium.name}
                  </a>
                ))}
              </div>
            </li>

            <li class="dropdown topbar-item">
              <a
                class="nav-link dropdown-toggle arrow-none nav-icon"
                data-bs-toggle="dropdown"
                href="/"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                data-bs-offset="0,19"
              >
                <i class="iconoir-bell"></i>
                <span class="alert-badge"></span>
              </a>
              <div class="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
                <h5 class="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                  Notifications{' '}
                </h5>
                <ul
                  class="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1"
                  role="tablist"
                ></ul>
                <div class="ms-0" style={{ maxHeight: '230px' }} data-simplebar>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="All"
                      role="tabpanel"
                      aria-labelledby="all-tab"
                      tabindex="0"
                    >
                      <a href="#" class="dropdown-item py-3">
                        <small class="float-end text-muted ps-2">
                          2 min ago
                        </small>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i class="iconoir-wolf fs-4"></i>
                          </div>
                          <div class="flex-grow-1 ms-2 text-truncate">
                            <h6 class="my-0 fw-normal text-dark fs-13">
                              Your order is placed
                            </h6>
                            <small class="text-muted mb-0">
                              Dummy text of the printing and industry.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item py-3">
                        <small class="float-end text-muted ps-2">
                          10 min ago
                        </small>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i class="iconoir-apple-swift fs-4"></i>
                          </div>
                          <div class="flex-grow-1 ms-2 text-truncate">
                            <h6 class="my-0 fw-normal text-dark fs-13">
                              Meeting with designers
                            </h6>
                            <small class="text-muted mb-0">
                              It is a long established fact that a reader.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item py-3">
                        <small class="float-end text-muted ps-2">
                          40 min ago
                        </small>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i class="iconoir-birthday-cake fs-4"></i>
                          </div>
                          <div class="flex-grow-1 ms-2 text-truncate">
                            <h6 class="my-0 fw-normal text-dark fs-13">
                              UX 3 Task complete.
                            </h6>
                            <small class="text-muted mb-0">
                              Dummy text of the printing.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item py-3">
                        <small class="float-end text-muted ps-2">
                          1 hr ago
                        </small>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i class="iconoir-drone fs-4"></i>
                          </div>
                          <div class="flex-grow-1 ms-2 text-truncate">
                            <h6 class="my-0 fw-normal text-dark fs-13">
                              Your order is placed
                            </h6>
                            <small class="text-muted mb-0">
                              It is a long established fact that a reader.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="#" class="dropdown-item py-3">
                        <small class="float-end text-muted ps-2">
                          2 hrs ago
                        </small>
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                            <i class="iconoir-user fs-4"></i>
                          </div>
                          <div class="flex-grow-1 ms-2 text-truncate">
                            <h6 class="my-0 fw-normal text-dark fs-13">
                              Payment Successfull
                            </h6>
                            <small class="text-muted mb-0">
                              Dummy text of the printing.
                            </small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="pages-notifications.html"
                  class="dropdown-item text-center text-dark fs-13 py-2"
                >
                  View All <i class="fi-arrow-right"></i>
                </a>
              </div>
            </li>
            <li class="dropdown topbar-item">
              <a
                class="nav-link dropdown-toggle arrow-none nav-icon"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                data-bs-offset="0,19"
              >
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt=""
                  class="thumb-md rounded-circle"
                />
              </a>
              <div class="dropdown-menu dropdown-menu-end py-0">
                <div class="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                  <div class="flex-shrink-0">
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      alt=""
                      class="thumb-md rounded-circle"
                    />
                  </div>
                  <div class="flex-grow-1 ms-2 text-truncate align-self-center">
                    <h6 class="my-0 fw-medium text-dark fs-13">
                      William Martin
                    </h6>
                    <small class="text-muted mb-0">Front End Developer</small>
                  </div>
                </div>
                <div class="dropdown-divider mt-0"></div>
                <small class="text-muted px-2 pb-1 d-block">Account</small>
                <a class="dropdown-item" href="/profile">
                  <i class="las la-user fs-18 me-1 align-text-bottom"></i>{' '}
                  Profile
                </a>
                <small class="text-muted px-2 py-1 d-block">Settings</small>
                <a class="dropdown-item" href="pages-profile.html">
                  <i class="las la-cog fs-18 me-1 align-text-bottom"></i>
                  Account Settings
                </a>
                <a class="dropdown-item" href="pages-faq.html">
                  <i class="las la-question-circle fs-18 me-1 align-text-bottom"></i>{' '}
                  Help Center
                </a>
                <div class="dropdown-divider mb-0"></div>
                <a class="dropdown-item text-danger" href="/login">
                  <i class="las la-power-off fs-18 me-1 align-text-bottom"></i>{' '}
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
