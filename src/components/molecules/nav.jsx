import React from 'react';

const Nav = ({ children }) => {
    return (
    <nav className="navbar navbar-static-top">
        <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </a>
        {children}
    </nav>
)}

export default Nav;