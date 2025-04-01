import React from 'react';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import { useState, useEffect } from 'react';
import Stadium from '../component/Stadium';
import Add11 from '../component/Add11';

function Stadium11() {
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
            <RowOne title="11v11" />
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">
                          Welcome to HaTruong Stadium
                        </h4>
                      </div>
                      <div className="col-auto">
                        <button
                          className="btn bg-primary text-white"
                          data-bs-toggle="modal"
                          data-bs-target="#add11"
                        >
                          <i className="fas fa-plus me-1"></i> Add Stadium
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <Stadium />
                    <Stadium />
                    <Stadium />
                    <Stadium />
                    <Stadium />
                    <Stadium />
                    <Stadium />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Offcanvas />
          <FooterComponnent />
        </div>
      </div>
      <Add11/>
    </>
  );
}

export default Stadium11;
