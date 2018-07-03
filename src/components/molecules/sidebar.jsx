import React from "react";

const Sidebar = props => (
  <aside className="main-sidebar">
    <section className="sidebar">
    {props.children}
    </section>
  </aside>
);

export default Sidebar;
