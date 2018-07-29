import React from "react";

const SidebarMenu = ({ children }) =>
  <aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">Menu Navegação</li>
        {children}
      </ul>
    </section>
  </aside>;

export default SidebarMenu;
