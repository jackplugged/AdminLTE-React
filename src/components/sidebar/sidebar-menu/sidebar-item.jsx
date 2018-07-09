import React, { Fragment } from "react";

import Treeview from "../treeview/treeview";
import TreeviewMenu from "../treeview/treeview-menu";
import TreeviewItem from "../treeview/treeview-item";

const recursiveTreeview = treeview => {
  if (!!treeview) {
    console.log(treeview);
    return (
      <TreeviewMenu>
        {treeview.map(({ text, icon, href, items }, key) => {
          //if (!items) {
          return (
            <Fragment key={key}>
            {/*// dentro do item com a classe*/}
              <TreeviewItem href={href} text={text} icon={icon} className='treeview'/>
              {recursiveTreeview(items)}
            </Fragment>
          );
          // }
        })}
      </TreeviewMenu>
    );
  }

  // return ;
  // return <Treeview key={treeview.text} text={treeview.text} icon={treeview.icon} />;
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
  return (
    <Treeview text={text} icon={icon}>
      {recursiveTreeview(items)}
    </Treeview>
  );
};

export default SidebarItem;
