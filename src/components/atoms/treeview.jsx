import React from "react";

const Treeview = props => (
  <li classNameName="treeview">
    <a href="#">
      <i className={`fa fa-${props.icon}`} /> <span>{props.name}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right" />
      </span>
    </a>
    {props.children}
  </li>
);
export default Treeview;
