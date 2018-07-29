import React from "react";

const collapseScreenSize = 767;

const handleClick = () => {
    const body = document.querySelector("body").classList;
    const windowHeight = window.innerHeight || 0;

    if (windowHeight <= collapseScreenSize) {
        body.toggle("sidebar-open");
    }
    body.toggle("sidebar-collapse");
};

const NavbarRightMenu = props => (
    <nav className="navbar navbar-static-top">
        <a onClick={() => handleClick()} className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
            {props.children}
        </div>
    </nav>
);

export default NavbarRightMenu;