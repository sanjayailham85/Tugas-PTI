import React, { useState, useRef } from 'react';
import { SidebarData } from '../SidebarData/SidebarData';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProSidebar className="side bottomMenu">
        <SidebarHeader className="top">
          <Link to="/">
            <div className="sidebarTitle">Podcast Unila</div>
          </Link>
        </SidebarHeader>

        <SidebarContent className="sidebarMenu">
          <Menu>
            {SidebarData.map((item, index) => (
              <SubMenu title={item.title} icon={item.logo}>
                {item.subNav.map((subItem, subItemIndex) => (
                  <MenuItem icon={subItem.subLogo}>
                    {subItem.title}
                    <Link to={subItem.path} />
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
