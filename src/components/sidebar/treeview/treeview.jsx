import React from "react";

const Treeview = ({icon, text, children}) => (
  <li className="treeview">
    <a href="">
      <i className={`fa fa-${icon}`} /> <span>{text}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right" />
      </span>
    </a>
    {children}
  </li>
);
export default Treeview;
