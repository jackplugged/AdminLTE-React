import React from "react";
import SidebarContainer from "./sidebar-menu/sidebar-container";
import SidebarMenu from "./sidebar-menu/sidebar-menu";
import SidebarItem from "./sidebar-menu/sidebar-item";

import menu from "./menu";

const MainHeader = () => (
  <SidebarContainer
    render={({ name }) => (
      <SidebarMenu>
        {menu.map(({ items, ...props }, key) => (
          <SidebarItem key={key} items={items} {...props} />
        ))}
      </SidebarMenu>
    )}
  />
);

export default MainHeader;
