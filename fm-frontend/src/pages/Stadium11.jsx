import React, { useState, useEffect } from 'react';
import {fetchDataByIdStadiumAndIdTypeAndEnable } from '../API/Api';
import HeaderComponnent from '../component/HeaderComponent';
import LeftMenuComponnent from '../component/LeftMenuComponent';
import FooterComponnent from '../component/FooterComponent';
import Offcanvas from '../component/Offcanvas';
import RowOne from '../component/RowOne';
import Stadium from '../component/Stadium';
import Add11 from '../component/Add11';
import EditStadium from '../component/EditStadium';
import ViewPrice from '../component/ViewPrice';
import EditPriceField from '../component/EditPriceField';
import DeleteStadium from '../component/DeleteStadium';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Stadium11() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  const [listField, setListField] = useState([]);
  const [stadiumData, setStadiumData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isFresh, setIsFresh] = useState(false);

  const toggleMenu = () => {
    setSidebarSize((prev) => (prev === 'collapsed' ? 'default' : 'collapsed'));
  };

  useEffect(() => {
    if (selectedStadium) {
      const idStadium = selectedStadium.idStadium;
      fetchDataByIdStadiumAndIdTypeAndEnable('field', idStadium, 2)
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

  useEffect(() => {
    if (selectedStadium) {
      console.log('DS', listField);
    }
  }, [selectedStadium, listField]);

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
                  <div className="row justify-content-center">
                    {selectedStadium ? (
                      listField.map((f, index) => (
                        <Stadium
                          key={index}
                          selectedStadium={selectedStadium}
                          field={f}
                          from="stadium11"
                          setStadiumData={setStadiumData}
                        />
                      ))
                    ) : (
                      <p className="no-data-message">No data available</p>
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
      <Add11
        IdStadium={selectedStadium?.idStadium || ''}
        setRefresh={setRefresh}
      />
      <EditStadium stadiumData={stadiumData} setRefresh={setRefresh} />
      <ViewPrice stadiumData={stadiumData} isFresh={isFresh} />
      <EditPriceField stadiumData={stadiumData} setIsFresh={setIsFresh} />
      <DeleteStadium stadiumData={stadiumData} />
    </>
  );
}

export default Stadium11;
