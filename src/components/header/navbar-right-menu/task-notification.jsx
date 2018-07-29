import React from "react";

const TaskNotification = ({ text, percent, color }) =>
    <li>
        <a href="">
            <h3>
                {text}
                <small className="pull-right">{percent}%</small>
            </h3>
            <div className="progress xs">
                <div className={`progress-bar progress-bar-${color}`} style={{ width: `${percent}%` }} role="progressbar"
                    aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">{percent}% Complete</span>
                </div>
            </div>
        </a>
    </li>;

export default TaskNotification;
