import React from "react";

const UserNotification = ({ img, name, time, message }) =>
  <li>
    <a href="">
      <div className="pull-left">
        <img src={img} className="img-circle" alt="User" />
      </div>
      <h4>
        {name}
        <small>
          <i className="fa fa-clock-o" /> {time} hours
        </small>
      </h4>
      <p>{message}</p>
    </a>
  </li>;

export default UserNotification;
