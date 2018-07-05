import React from "react";

const Treeview = props => (
  <li className="treeview">
    <a href="#">
      <i className={`fa fa-${props.icon}`} /> <span>{props.text}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right" />
      </span>
    </a>
    {props.render(props)}
  </li>
);
export default Treeview;
