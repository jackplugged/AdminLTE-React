import React from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

const SidebarItem = ({ items, text, icon }) => (
  <Treeview text={text} icon={icon}>
    <TreeviewMenu>
      {items.map((item, key) => <TreeviewItem key={key} {...item} />)}
    </TreeviewMenu>
  </Treeview>
);

export default SidebarItem;
