import React from "react";
import SidebarContainer from "./sidebar-menu/sidebar-container";
import SidebarMenu from "./sidebar-menu/sidebar-menu";
import Treeview from "./treeview/treeview";
import TreeviewMenu from "./treeview/treeview-menu";
import TreeviewItem from "./treeview/treeview-item";

import menu from "../../menu";

const MainHeader = () => (
  <SidebarContainer
    render={({ name }) => (
      <SidebarMenu>
        {menu.map(({ items, ...props }, key) => (
          <Treeview key={key} {...props} >
            <TreeviewMenu>
              {items.map((item, key) => <TreeviewItem key={key} {...item} />)}
            </TreeviewMenu>
          </Treeview>
        ))}
      </SidebarMenu>
    )}
  />
);

export default MainHeader;
