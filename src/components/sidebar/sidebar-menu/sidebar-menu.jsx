import React from "react";

const SidebarMenu = props => (
  <ul className="sidebar-menu" data-widget="tree">
    <li className="header">Menu Navegação</li>
    {props.children}
  </ul>
);

export default SidebarMenu;
