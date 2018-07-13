import React from "react";
import SidebarMenu from "./sidebar-menu/sidebar-menu";

import menu from "./menu";

const MainHeader = () => (
      <SidebarMenu>
        {menu.map(( Component, key) => <Component key={key} />)}
      </SidebarMenu> 
);

export default MainHeader;
