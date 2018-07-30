import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";



const handleToggle = event =>{
  event.preventDefault();

  const element = event.target;
  const parent = element.parentElement;
  const child = element.nextElementSibling;

  console.log(child.children);


/*

  Array.from(parent).map( el => {
    console.log(el);
  });

  /*
  const element = event.target;
  const parent = element.parentElement;
  const child = element.nextElementSibling;

  parent.classList.toggle("menu-open");
  child.style.display = "block";

  //console.log(parent, element, child);

  const childTarget = document.getElementById(parent.id);
  childTarget.classList.toggle("menu-open");


  console.log(childTarget);
  /*
  const element = event.target.parentElement;
  element.classList.toggle("menu-open");

  console.log(element.classList);

  const child = document.getElementById(element.id);
  const mode = child.children[1].style.display;
  //console.log(mode);
  child.children[1].style.display =  "block";


  const child = element.children[1].style;
 // console.log(child.children);
 //child.style.display = "block";
 console.log(element.id);
 child.display = ( child.display ==="none" ) ? "block" : "none";
 */
};

const TreeviewItem = ({ href, icon, text, dropdown, children }) => {

  const notifications = [], childs = [];

  React.Children.map(children, (child, i) => {
    let cloned = React.cloneElement(child, { key: i });
    child.type.name === "TreeviewNotification" ? notifications[i] = cloned : childs[i] = child;
  });

  return (
    // menu-open
    <li onClick={handleToggle} id={`_${Math.random().toString().substr(2, 10)}`} className={`${dropdown ? "treeview" : ""}`}>
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
