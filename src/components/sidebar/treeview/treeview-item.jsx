import React from "react";
import PropTypes from "prop-types";

const TreeviewItem = ({ href, icon, text, treeview, children }) => 
   (
      <li className={(!treeview ? 'treeview' : 'oi')}>
        <a href={href}>
          <i className={`fa fa-${icon}`} />
          {text}
          {(!treeview || 
               <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
              </span>
            )}                 
        </a>
        {children}  
      </li>
);

TreeviewItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  treeview: PropTypes.bool,
};

TreeviewItem.defaultProps = {
  href: "",
  icon: "circle-o",
  text: "Menu Item",
  treeview: false
};

export default TreeviewItem;
