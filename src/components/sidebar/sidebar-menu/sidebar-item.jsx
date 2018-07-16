import React, { Fragment } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";
import TreeviewNotification from "../treeview/treeview-notification";

const recursiveTreeview = ( { items, text, icon, href, notifications = [], color = 'blue' }) => {  
  if (!!items) {
    return (
      <Treeview text={text} icon={icon}>
        <TreeviewMenu>
          {items.map((item, key) => (
            <Fragment key={key}>{recursiveTreeview(item)}</Fragment>
          ))}
        </TreeviewMenu>
      </Treeview>
    );
  }

  return <TreeviewItem href={href} text={text} icon={icon}>
           {!notifications || notifications.map(({ color, text }, key ) =>
                 <TreeviewNotification key={key} color={`${color}`} text={`${text}`} />)}      
         </TreeviewItem>                
};

const SidebarItem = ({ item }) => recursiveTreeview(item);

export default SidebarItem;


