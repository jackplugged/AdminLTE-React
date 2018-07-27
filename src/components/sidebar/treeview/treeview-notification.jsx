import React from 'react';
import PropTypes from "prop-types";

const TreeviewNotification = ({ text, color }) =>
      <small className={`label pull-left bg-${color}`}>{text}</small>

TreeviewNotification.propTypes = {   
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };
  
TreeviewNotification.defaultProps = {   
    text: "",
    color: "blue"
};

export default TreeviewNotification;