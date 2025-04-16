import { useState, useEffect } from 'react';
import HeaderComponent from './component/HeaderComponent';
import LeftMenuComponent from './component/LeftMenuComponent';
import FooterComponent from './component/FooterComponent';
import Offcanvas from './component/Offcanvas';
import RowOne from './component/RowOne';

function App({ component: Component, title }) {
  const [sidebarSize, setSidebarSize] = useState('default');
  const [selectedStadium, setSelectedStadium] = useState(null); // Thêm state
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
      <HeaderComponent
        onToggleMenu={toggleMenu}
        selectedStadium={selectedStadium}
        setSelectedStadium={setSelectedStadium}
      />
      <LeftMenuComponent />
      <div className="startbar-overlay d-print-none"></div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <RowOne title={title} />
            {Component && <Component />}
          </div>
          <Offcanvas />
          <FooterComponent />
        </div>
      </div>
    </>
  );
}

export default App;
