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
          <div className="logo">ini logo</div>
        </SidebarHeader>

        <SidebarContent className="sidebarMenu">
          <Menu>
            {SidebarData.map((item, index) => (
              <SubMenu title={item.title}>
                {item.subNav.map((subItem, subItemIndex) => (
                  <MenuItem>
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
