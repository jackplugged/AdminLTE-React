import React from "react";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

const TreeviewItem = ({ href, icon, text, children }) => (
  <li>   
    <Link to={href}>
      <i className={`fa fa-${icon}`} />
      {text}
      <span className="pull-right-container">{children}</span>   
    </Link>      
  </li>
);

TreeviewItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired, 
};

TreeviewItem.defaultProps = {
  href: "",
  icon: "circle-o",
  text: "Menu Item"
};

export default TreeviewItem;
