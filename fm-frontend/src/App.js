import { useState, useEffect } from 'react';
import HeaderComponent from './component/HeaderComponent';
import LeftMenuComponent from './component/LeftMenuComponent';
import FooterComponent from './component/FooterComponent';
import Offcanvas from './component/Offcanvas';
import RowOne from './component/RowOne';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
  const [isRefresh, setIsRefresh] = useState(false);
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
      <PrivateRoutes>
        <HeaderComponent
          onToggleMenu={toggleMenu}
          selectedStadium={selectedStadium}
          setSelectedStadium={setSelectedStadium}
          isRefresh={isRefresh}
        />
        <LeftMenuComponent />
        <div className="startbar-overlay d-print-none"></div>
        <div className="page-wrapper">
          <div className="page-content">
            <div className="container-fluid">
              <RowOne />
              <Outlet
                context={{
                  selectedStadium,
                  setSelectedStadium,
                  setIsRefresh,
                }}
              />
            </div>
            <Offcanvas />
            <FooterComponent />
          </div>
        </div>
      </PrivateRoutes>
    </>
  );
}

export default App;
