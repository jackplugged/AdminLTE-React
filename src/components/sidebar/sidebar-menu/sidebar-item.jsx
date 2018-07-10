import React, { Fragment } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

const recursiveTreeview = treeview => {  
  const { items, text, icon } = treeview;
  if (!!items) {   
    return (     
        items.map(({ text, icon, href, items }, key) => {        
          return (
            <Treeview text={text} icon={icon}>
                <TreeviewMenu>
                    <TreeviewItem href={href} text={text} icon={icon}/>
                   
                </TreeviewMenu>
             </Treeview>
        );         
        })     
    );
  }
};

const SidebarItem = ( props ) => recursiveTreeview(props);

export default SidebarItem;
