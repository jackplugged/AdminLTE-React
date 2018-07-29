import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const TreeviewItem = ({ href, icon, text, dropdown, children }) => {

  const notifications = [], childs = [];

  React.Children.map(children, (child, i) => {
    let cloned = React.cloneElement(child, { key: i });
    child.type.name === "TreeviewNotification" ? notifications[i] = cloned : childs[i] = child;
  });

  return (
    <li className={`${!dropdown || "treeview menu-open"}`}>
      <Link to={href}>
        <i className={`fa fa-${icon}`} />
        {text}
        <span className="pull-right-container">
          {notifications}
          {!dropdown || <small className="fa fa-angle-left pull-right" />}
        </span>
      </Link>
      {childs}
    </li>
  );
};

TreeviewItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

TreeviewItem.defaultProps = {
  href: "",
  icon: "circle-o",
  text: "Menu Item"
};

export default TreeviewItem;
