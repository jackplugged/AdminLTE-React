import React from 'react';

const NavbarRightMenu = props =>(
  <nav className="navbar navbar-static-top">
      <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
      {props.children}
      </div>
    </nav>
);

export default NavbarRightMenu;