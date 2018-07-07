import React, { Component } from "react";

class SidebarContainer extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          {this.props.render({ name: "Sidnei Simmon" })}
        </section>
      </aside>
    );
  }
}

export default SidebarContainer;
