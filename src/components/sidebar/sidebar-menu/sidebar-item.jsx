import React, { Fragment } from "react";

import Treeview from "components/sidebar/treeview/treeview";
import TreeviewMenu from "components/sidebar/treeview/treeview-menu";
import TreeviewItem from "components/sidebar/treeview/treeview-item";
import TreeviewNotification from "components/sidebar/treeview/treeview-notification";

const treeviewNotifications = notifications => notifications.map(({ color, text }, key ) =>
                  <TreeviewNotification key={key} color={`${color}`} text={`${text}`} />)    

const recursiveTreeview = ( { items, text, icon, href, notifications = [] }) => {  
  if (!!items) {
    return (
      <Treeview id={Math.random().toString().substr(3, 10)} text={text} icon={icon} notifications={treeviewNotifications(notifications)}>
      {({ open }) =>      
        <TreeviewMenu isOpen={open} >
          {items.map((item, key) => (
            <Fragment key={key}>{recursiveTreeview(item)}</Fragment>
          ))}
        </TreeviewMenu>      
      }        
      </Treeview>
    );
  }

  return <TreeviewItem href={href} text={text} icon={icon}>
           {!notifications || treeviewNotifications(notifications)}     
         </TreeviewItem>                
};

const SidebarItem = ({ item }) => recursiveTreeview(item);

export default SidebarItem;


