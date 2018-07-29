import React from "react";

const DropdowNotifications = props => {
  const notificationsLength = props.children.length;
  const classes = props.className || "";
  return (
    <li className={`dropdown ${classes}`}>
      <a href="" className="dropdown-toggle" data-toggle="dropdown">
        <i className={`fa fa-${props.icon}`} />
        <span className={`label ${props.label}`}>
          {!!notificationsLength ? (
            props.children.length
          ) : (
              <i className="fa fa-refresh faa-spin animated" />
            )}
        </span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">
          Você tem {props.children.length} notificações
        </li>
        <li>
          <ul className="menu">{props.children}</ul>
        </li>
      </ul>
    </li>
  );
};

export default DropdowNotifications;
