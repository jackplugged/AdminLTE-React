import React from "react";

const TreeviewItem = props => (  
    <li>
        <a href={props.href}>
         <i className={`fa fa-${props.icon}`}></i>{props.text}
        </a>
    </li>    
);

export default TreeviewItem;