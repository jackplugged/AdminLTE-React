import React from "react";

const TreeviewMenu = ({ children, isOpen }) => (
  <ul className="treeview-menu" style={{ display: `${isOpen ? 'block': 'none' }`}} >{children}</ul>
);

export default TreeviewMenu;
