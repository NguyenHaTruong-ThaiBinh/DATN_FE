import { useState, useEffect } from 'react';
import HeaderComponent from './component/HeaderComponent';
import LeftMenuComponent from './component/LeftMenuComponent';
import FooterComponent from './component/FooterComponent';
import Offcanvas from './component/Offcanvas';
import RowOne from './component/RowOne';

function App({ component: Component, title }) {
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
      <HeaderComponent onToggleMenu={toggleMenu} />
      <LeftMenuComponent />
      <div className="startbar-overlay d-print-none"></div>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">
            <RowOne title={title}/>
            {Component && <Component/>}
          </div>
          <Offcanvas />
          <FooterComponent />
        </div>
      </div>
    </>
  );
}

export default App;
