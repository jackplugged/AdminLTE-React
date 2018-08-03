import React from "react";

const TreeviewMenu = ({ children, open }) =>
    <ul className="treeview-menu" style={{ display: (open ? "block" : "none") }}>{children}</ul>;

export default TreeviewMenu;
