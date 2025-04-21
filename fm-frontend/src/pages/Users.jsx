import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';
import { fetchData } from '../API/Api';
import ModalRemoveUser from '../component/ModalRemoveUser';
import ModalUpdateRoleUser from '../component/ModalUpdateRoleUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Users() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  const [listUsers, setListUser] = useState([]);
  const [userData, setUserData] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);
  // Hàm toggle menu
  const toggleMenu = () => {
    setSidebarSize((prev) => (prev === 'collapsed' ? 'default' : 'collapsed'));
  };
  useEffect(() => {
    fetchData('users')
      .then((respone) => {
        setListUser(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isRefresh]);
  // Cập nhật class cho body khi sidebarSize thay đổi
  useEffect(() => {
    document.body.setAttribute('data-sidebar-size', sidebarSize);
  }, [sidebarSize]);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
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
            <RowOne title="Users" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Users Details</h4>
                      </div>
                      <div className="col-auto"></div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    {listUsers.length > 0 ? (
                      <div className="table-responsive mt-4">
                        <table className="table table-bordered table-hover text-center">
                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>PhoneNumber</th>
                              <th>Password</th>
                              <th>Role</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listUsers
                              .filter((user) => user.enable === 'ENABLE')
                              .map((user, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>
                                    <h6 className="m-0">{user.name}</h6>
                                  </td>
                                  <td>{user.email}</td>
                                  <td>{user.phoneNumber}</td>
                                  <td>{user.password}</td>
                                  <td>
                                    <span className="badge rounded text-success bg-success-subtle">
                                      {user.nameRole}
                                    </span>
                                  </td>
                                  <td>
                                    <a href="#a" className="me-2">
                                      <i className="fas fa-align-justify"></i>
                                    </a>
                                    <a
                                      href="#a"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                      data-bs-target="#updaterole"
                                      onClick={() =>
                                        setUserData({
                                          id: user.idUser,
                                          name: user.name,
                                          nameRole: user.nameRole,
                                        })
                                      }
                                    >
                                      <i className="las la-pen text-secondary fs-18"></i>
                                    </a>
                                    <a
                                      href="#a"
                                      data-bs-toggle="modal"
                                      data-bs-target="#removeuser"
                                      onClick={() =>
                                        setUserData({
                                          id: user.idUser,
                                          name: user.name,
                                        })
                                      }
                                    >
                                      <i className="las la-trash-alt text-secondary fs-18"></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="no-data-message mt-3">No data available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <ModalRemoveUser user={userData} setIsRefresh={setIsRefresh} />
      <ModalUpdateRoleUser user={userData} setIsRefresh={setIsRefresh} />
    </>
  );
}

export default Users;
