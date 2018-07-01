import React from "react";

const Header = props => { 
  return (
    <header className="main-header">
      <a href="" className="logo">
        <span className="logo-mini"><b>A</b>LT</span>
        <span className="logo-lg"><b>Admin</b>LTE</span>
      </a>
      {props.children}
    </header>
  );
};

export default Header;
