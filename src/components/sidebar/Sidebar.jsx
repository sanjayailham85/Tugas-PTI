import React from 'react';
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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProSidebar className="side">
        <SidebarHeader className="top">
          <Link to="/">
            <div className="logo">Podcast Unila</div>
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
