import React from 'react';

const Notification = ({ icon, color, text }) => (
    <li>
        <a href="">
            <i className={`fa fa-${icon} text-${color}`}> {text} </i>
        </a>
    </li>
)

export default Notification;