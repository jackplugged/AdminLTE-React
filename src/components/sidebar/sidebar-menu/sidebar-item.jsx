import React, { Fragment } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

const recursiveTreeview = treeview => {
  const { items, text, icon, href } = treeview;

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
  return <TreeviewItem href={href} text={text} icon={icon} />;
};

const SidebarItem = props => recursiveTreeview(props);

export default SidebarItem;
