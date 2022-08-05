import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    // <div className="layout">
    //   <Sidebar />
    //   <div className="layoutContainer">
    //     <Navbar />
    //     <Outlet />
    //   </div>
    // </div>

    <div className="layout">
      <div className="sideDesktop">
        <Sidebar />
      </div>
      <div className="layoutContainer">
        <Navbar />
        <Outlet />
        <div className="sideMobile">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
