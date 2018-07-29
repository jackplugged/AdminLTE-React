import React from "react";
import SidebarMenu from "components/sidebar/sidebar-menu/sidebar-menu";

import menu from "containers/menu";

const MainHeader = () => (
  <SidebarMenu>
    {menu.map((Component, key) => <Component key={key} />)}
  </SidebarMenu>
);

export default MainHeader;
