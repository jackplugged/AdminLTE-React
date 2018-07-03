import React from "react";
import Sidebar from "../molecules/sidebar";
import SidebarMenu from "../molecules/sidebar-menu";
import Treeview from '../atoms/treeview';

const MainHeader = () => (
  <Sidebar>
    <SidebarMenu>
    <Treeview icon="share" name="Multilevel">
    
    </Treeview>
    </SidebarMenu>
  </Sidebar>
);

export default MainHeader;
