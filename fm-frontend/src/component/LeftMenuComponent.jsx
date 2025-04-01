import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LeftMenuComponent = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  // Khi đường dẫn thay đổi, cập nhật activeMenu
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <div className="startbar d-print-none">
        <div className="brand">
          <a href="/" className="logo">
            <span>
              <img
                src="assets/images/logo1.png"
                alt="logo-small"
                className="logo-sm"
              />
            </span>
            <span className="">
              <img
                src="assets/images/logo.png"
                alt="logo-large"
                className="logo-lg logo-light"
              />
              <img
                src="assets/images/logo.png"
                alt="logo-large"
                className="logo-lg logo-dark"
              />
            </span>
          </a>
        </div>
        <div className="startbar-menu">
          <div
            className="startbar-collapse"
            id="startbarCollapse"
            data-simplebar
          >
            <div className="d-flex align-items-start flex-column w-100">
              <ul className="navbar-nav mb-auto w-100">
                <li className="menu-label mt-2">
                  <span>Main</span>
                </li>

                {/* Home */}
                <li
                  className={`nav-item ${activeMenu === '/' ? 'active' : ''}`}
                >
                  <a
                    className={`nav-link ${activeMenu === '/' ? 'active' : ''}`}
                    href="/"
                  >
                    <i className="iconoir-home menu-icon"></i>
                    <span>Home</span>
                  </a>
                </li>

                {/* Booking */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeMenu.includes('/stadium') ? 'active' : ''
                    }`}
                    href="#Booking"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded={activeMenu.includes('/stadium')}
                    aria-controls="Booking"
                  >
                    <i className="iconoir-task-list menu-icon"></i>
                    <span>Booking</span>
                  </a>
                  <div
                    className={`collapse ${
                      activeMenu.includes('/stadium') ? 'show' : ''
                    }`}
                    id="Booking"
                  >
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/stadium5' ? 'active' : ''
                          }`}
                          href="/stadium5"
                        >
                          <i className="iconoir-football menu-icon"></i>
                          <span>7v7</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/stadium11' ? 'active' : ''
                          }`}
                          href="/stadium11"
                        >
                          <i className="iconoir-football menu-icon"></i>
                          <span>11v11</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Booking stt */}
                <li
                  className={`nav-item ${
                    activeMenu === '/history_booking' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/history_booking' ? 'active' : ''
                    }`}
                    href="/history_booking"
                  >
                    <i className="iconoir-plug-type-l menu-icon"></i>
                    <span>Booking Status</span>
                  </a>
                </li>
                {/* Service */}
                <li
                  className={`nav-item ${
                    activeMenu === '/service' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/service' ? 'active' : ''
                    }`}
                    href="/service"
                  >
                    <i className="iconoir-credit-cards menu-icon"></i>
                    <span>Service</span>
                  </a>
                </li>
                {/* users */}
                <li
                  className={`nav-item ${
                    activeMenu === '/users' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/users' ? 'active' : ''
                    }`}
                    href="/users"
                  >
                    <i className="iconoir-group menu-icon"></i>
                    <span>Users</span>
                  </a>
                </li>
                {/* Calendar */}
                <li
                  className={`nav-item ${
                    activeMenu === '/calendar' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/calendar' ? 'active' : ''
                    }`}
                    href="/calendar"
                  >
                    <i className="iconoir-calendar menu-icon"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                {/* Facility */}
                <li
                  className={`nav-item ${
                    activeMenu === '/facility' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/facility' ? 'active' : ''
                    }`}
                    href="/facility"
                  >
                    <i className="iconoir-paste-clipboard menu-icon"></i>
                    <span>Facility</span>
                  </a>
                </li>
                <li className="menu-label mt-2">
                  <span>Feature</span>
                </li>
                {/* Connect */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeMenu.includes('/matching') ||
                      activeMenu === '/handle' ||
                      activeMenu === '/match'
                        ? 'active'
                        : ''
                    }`}
                    href="#sidebarMatching"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded={
                      activeMenu.includes('/matching') ||
                      activeMenu === '/handle' ||
                      activeMenu === '/match'
                    }
                    aria-controls="sidebarMatching"
                  >
                    <i className="fas fa-users menu-icon"></i>
                    <span>Connect</span>
                  </a>
                  <div
                    className={`collapse ${
                      activeMenu.includes('/matching') ||
                      activeMenu === '/handle' ||
                      activeMenu === '/match'
                        ? 'show'
                        : ''
                    }`}
                    id="sidebarMatching"
                  >
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/matching' ? 'active' : ''
                          }`}
                          href="/matching"
                        >
                          <i className="iconoir-community menu-icon"></i>
                          <span>Matching</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/handle' ? 'active' : ''
                          }`}
                          href="/handle"
                        >
                          <i className="fas fa-wrench menu-icon"></i>
                          <span>Handle</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/match' ? 'active' : ''
                          }`}
                          href="/match"
                        >
                          <i className="fas fa-handshake menu-icon"></i>
                          <span>Match</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* Chat */}
                <li
                  className={`nav-item ${
                    activeMenu === '/chat' ? 'active' : ''
                  }`}
                >
                  <a
                    className={`nav-link ${
                      activeMenu === '/chat' ? 'active' : ''
                    }`}
                    href="/chat"
                  >
                    <i className="iconoir-chat-bubble menu-icon"></i>
                    <span>Chat</span>
                  </a>
                </li>
                {/* map */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeMenu === '/weather' || activeMenu === '/map'
                        ? 'active'
                        : ''
                    }`}
                    href="#sidebarFeature"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded={
                      activeMenu === '/weather' || activeMenu === '/map'
                    }
                    aria-controls="sidebarFeature"
                  >
                    <i className="fas fa-users menu-icon"></i>
                    <span>Feature</span>
                  </a>
                  <div
                    className={`collapse ${
                      activeMenu === '/weather' || activeMenu === '/map'
                        ? 'show'
                        : ''
                    }`}
                    id="sidebarFeature"
                  >
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/map' ? 'active' : ''
                          }`}
                          href="/map"
                        >
                          <i className="fas fa-map-marker-alt menu-icon"></i>
                          <span>Map</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${
                            activeMenu === '/weather' ? 'active' : ''
                          }`}
                          href="/weather"
                        >
                          <i className="fas fa-cloud-sun menu-icon"></i>
                          <span>Weather</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftMenuComponent;
