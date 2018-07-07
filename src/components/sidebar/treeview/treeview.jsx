import React from "react";
import PropTypes from "prop-types";

const Treeview = ({ icon, text, href, children }) => (
  <li className="treeview">
    <a href={href}>
      <i className={`fa fa-${icon}`} /> <span>{text}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right" />
      </span>
    </a>
    {children}
  </li>
);

Treeview.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Treeview.defaultProps = {
  href: "",
  icon: "list",
  text: "Menu"
};

export default Treeview;
