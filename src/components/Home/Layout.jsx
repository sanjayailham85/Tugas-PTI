import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layoutContainer">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
