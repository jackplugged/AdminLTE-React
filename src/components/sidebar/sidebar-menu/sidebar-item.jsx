import React, { Component } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

/*
class SidebarItem extends Component {
  isRecursive = tree => {
    if (tree.isArray()) {
      return items.map((item, key) => <TreeviewItem key={key} {...item} />);
    }

  };
}
*/

const recursiveTreeview = treeview => {
  if (!!treeview) {
    treeview.map(({ items, ...item }, key) => {
      console.log(item);
      return recursiveTreeview(items);
    });
  }
  //console.log(treeview);
  return true;
};

/*
<Treeview key={key} text={treeview.text} icon={treeview.icon}>
    <TreeviewMenu>
      {treeview.map(({ item, items }, key) => (
        <TreeviewItem key={key} {...item} />
      ))}
    </TreeviewMenu>
</Treeview>
*/

const SidebarItem = ({ items, text, icon }) => {
  return recursiveTreeview(items);
};

export default SidebarItem;
