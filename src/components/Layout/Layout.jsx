import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layoutContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
