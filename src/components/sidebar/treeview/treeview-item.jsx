import React from "react";
import PropTypes from "prop-types";

const TreeviewItem = ({ href, icon, text, className, children }) => (
  <li>
    <a href={href}>
      <i className={`fa fa-${icon} ${className}`} />
      {text}
      {children}
    </a>
  </li>
);

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
