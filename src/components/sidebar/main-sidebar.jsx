import React from "react";
import Sidebar from "./sidebar-menu/sidebar";
import SidebarMenu from "./sidebar-menu/sidebar-menu";
import Treeview from './treeview/treeview';
import TreeviewMenu from './treeview/treeview-menu';
import TreeviewItem from './treeview/treeview-item';

import menu from '../../menu/menu';

const MainHeader = () => (
  <Sidebar>
    <SidebarMenu>    
    {menu.map(({items, ...props}, key) =>
       <Treeview key={key} {...props} render={()=>
         <TreeviewMenu>
          {items.map( (item, key) => <TreeviewItem key={key} {...item}/>)}
         </TreeviewMenu>
       }/>
    )}
    </SidebarMenu>
  </Sidebar>
);

export default MainHeader;
