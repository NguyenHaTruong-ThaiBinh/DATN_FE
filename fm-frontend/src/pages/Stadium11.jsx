import React, { useState, useEffect } from 'react';
import { fetchData } from '../API/Api';
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
    fetchData('field')
      .then((respone) => {
        setListField(respone.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refresh]);

  useEffect(() => {
    document.body.setAttribute('data-sidebar-size', sidebarSize);
  }, [sidebarSize]);

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
                      listField
                        .filter(
                          (f) =>
                            f.nameStadium?.trim().toLowerCase() ===
                              selectedStadium.name?.trim().toLowerCase() &&
                            f.nameType === '11' &&
                            f.enable === 'ENABLE'
                        )
                        .map((f, index) => (
                          <Stadium
                            key={index}
                            selectedStadium={selectedStadium}
                            field={f}
                            from="stadium11"
                            setStadiumData={setStadiumData}
                          />
                        ))
                    ) : (
                      <p className="no-data-message">No data available</p> // Hiển thị nếu không chọn sân
                    )}

                    {/* Nếu không có stadium nào khớp với tên */}
                    {selectedStadium &&
                      listField.filter(
                        (f) =>
                          f.nameStadium?.trim().toLowerCase() ===
                          selectedStadium.name?.trim().toLowerCase()
                      ).length === 0 && (
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
