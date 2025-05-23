import React, { useState, useEffect } from 'react';

import HeaderComponent from '../component/HeaderComponent';
import LeftMenuComponent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Form from '../component/Form';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import Stadium from '../component/Stadium';
import EditStadium from '../component/EditStadium';
import DeleteStadium from '../component/DeleteStadium';
import { fetchDataByIdStadiumAndIdTypeAndEnable } from '../API/Api';
import EditPriceField from '../component/EditPriceField';
import ViewPrice from '../component/ViewPrice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stadium5() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  const [listField, setListField] = useState([]);
  const [stadiumData, setStadiumData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isFresh, setIsFresh] = useState(false);

  //test local storage
  const idUser = 1;
  localStorage.setItem('idUser', idUser);

  const idUser1 = localStorage.getItem('idUser');

  useEffect(() => {
    console.log('ID', idUser1);
  });

  //
  const toggleMenu = () => {
    setSidebarSize((prev) => (prev === 'collapsed' ? 'default' : 'collapsed'));
  };

  //lấy danh sách sân ra
  useEffect(() => {
    if (selectedStadium) {
      const idStadium = selectedStadium.idStadium;
      fetchDataByIdStadiumAndIdTypeAndEnable('field', idStadium, 1)
        .then((respone) => {
          setListField(respone.data.result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedStadium, refresh]);

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
      <HeaderComponent
        onToggleMenu={toggleMenu}
        selectedStadium={selectedStadium}
        setSelectedStadium={setSelectedStadium} // Truyền xuống Header
      />
      <LeftMenuComponent />
      <div className="startbar-overlay d-print-none"></div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <RowOne title="7v7" />
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
                          data-bs-target="#addUser"
                        >
                          <i className="fas fa-plus me-1"></i> Add Stadium
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    {selectedStadium ? (
                      listField.map((f, index) => (
                        <Stadium
                          key={index}
                          selectedStadium={selectedStadium}
                          field={f}
                          setStadiumData={setStadiumData}
                          from="stadium5"
                        />
                      ))
                    ) : (
                      <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
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
      <Form stadiumName={selectedStadium?.name || ''} setRefresh={setRefresh} />
      <EditStadium stadiumData={stadiumData} setRefresh={setRefresh} />
      <ViewPrice stadiumData={stadiumData} isFresh={isFresh} />
      <DeleteStadium stadiumData={stadiumData} setRefresh={setRefresh} />
      <EditPriceField stadiumData={stadiumData} setIsFresh={setIsFresh} />
    </>
  );
}
export default Stadium5;
