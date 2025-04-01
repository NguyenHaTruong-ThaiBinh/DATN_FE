import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';

function Users() {
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
                    <div className="table-responsive">
                      <table className="table mb-0" id="datatable_1">
                        <thead className="table-light">
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  className="me-2 thumb-md align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Karen Savage</h6>
                                  <p className="fs-12 text-muted mb-0">USA</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="text-body text-decoration-underline"
                              >
                                extradummy@gmail.com
                              </a>
                            </td>
                            <td>+1 234 567 890</td>
                            <td>07 May 2024</td>
                            <td>
                              <span className="badge rounded text-success bg-success-subtle">
                                Active
                              </span>
                            </td>
                            <td className="text-end">
                              <a href="#">
                                <i className="fas fa-align-justify"></i>
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18"></i>
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18"></i>
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
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
    </>
  );
}

export default Users;
