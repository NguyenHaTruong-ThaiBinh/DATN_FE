import { useState, useEffect } from 'react';
import { fetchData, fetchDataById, postLogout } from '../API/Api';
import { useNavigate } from 'react-router-dom';
import Notifications from './Notifications';
import { Client } from '@stomp/stompjs';
import { toast } from 'react-toastify';
import SockJS from 'sockjs-client';
import Cookies from 'js-cookie';

const HeaderComponent = ({
  onToggleMenu,
  selectedStadium,
  setSelectedStadium,
  isRefresh,
}) => {
  const [stadiums, setStadiums] = useState([]);
  const navigate = useNavigate();
  const idUser = Cookies.get('idUser');
  const token = Cookies.get('token');
  const [user, setUser] = useState('');
  const [listNotification, setListNotification] = useState([]);
  const [fresh, setFresh] = useState(false);

  //handleLogout
  const handleLogout = async () => {
    if (!token) {
      // Nếu không có token thì vẫn xóa role và điều hướng
      Cookies.remove('role');
      Cookies.remove('token');
      navigate('/', { replace: true });
      return;
    }

    const formData = new FormData();
    formData.append('token', token);

    try {
      const response = await postLogout('authentication', formData);

      if (response.data.code === 200) {
        Cookies.remove('role');
        Cookies.remove('token');

        toast.success('Logout successful!');

        setTimeout(() => {
          navigate('/', { replace: true });
        }, 500);
      }
    } catch (error) {
      console.error('Logout error: ', error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred!');
      }
      Cookies.remove('role');
      Cookies.remove('token');
      navigate('/', { replace: true });
    }
  };

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/manager/ws'), // Đảm bảo URL này đúng
      reconnectDelay: 5000, // Tự động reconnect mỗi 5s
      debug: (str) => console.log('🛠️ STOMP DEBUG:', str),
      onConnect: (frame) => {
        console.log('✅ WebSocket connected!', frame);

        // Khi kết nối xong thì subscribe tới topic của user
        client.subscribe(`/topic/user/${idUser}`, (message) => {
          toast.warning('New Message!', message.body);
        });
      },
      onWebSocketError: (event) => {
        console.error('❌ Lỗi WebSocket:', event);
      },
    });

    client.activate();

    // Cleanup khi component unmount
    return () => {
      client.deactivate();
    };
  }, [idUser]);

  //lấy danh sách thông báo
  useEffect(() => {
    if (idUser) {
      fetchDataById('message', idUser)
        .then((respone) => {
          setListNotification(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [idUser, fresh]);

  //lấy danh sách sân
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
        console.error('Error:', error);
      });
  }, [isRefresh]);

  //lấy User theo idUser
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
              <div
                className="nav-link dropdown-toggle arrow-none nav-icon"
                data-bs-toggle="dropdown"
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
              </div>
              <div className="dropdown-menu">
                {stadiums.map((stadium, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
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
                  </div>
                ))}
              </div>
            </li>

            <li class="dropdown topbar-item">
              <div
                class="nav-link dropdown-toggle arrow-none nav-icon"
                data-bs-toggle="dropdown"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
                data-bs-offset="0,19"
              >
                <i class="iconoir-bell"></i>
                <span class="alert-badge"></span>
              </div>
              <div
                class="dropdown-menu stop dropdown-menu-end dropdown-lg py-0"
                style={{ width: '400px' }}
              >
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
                      {idUser ? (
                        listNotification.map((n, index) => (
                          <Notifications
                            key={index}
                            notification={n}
                            setFresh={setFresh}
                          />
                        ))
                      ) : (
                        <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
                      )}
                    </div>
                  </div>
                </div>
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
                    <h6 class="my-0 fw-medium text-dark fs-13">{user.name}</h6>
                    <small class="text-muted mb-0">{user.nameRole}</small>
                  </div>
                </div>
                <div class="dropdown-divider mt-0"></div>
                <small class="text-muted px-2 pb-1 d-block">Account</small>
                <div
                  class="dropdown-item"
                  onClick={() => navigate('/profile')}
                  style={{ cursor: 'pointer' }}
                >
                  <i class="las la-user fs-18 me-1 align-text-bottom"></i>{' '}
                  Profile
                </div>
                <div class="dropdown-divider mb-0"></div>
                <div
                  class="dropdown-item text-danger"
                  onClick={() => handleLogout()}
                  style={{ cursor: 'pointer' }}
                >
                  <i class="las la-power-off fs-18 me-1 align-text-bottom"></i>{' '}
                  Logout
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
