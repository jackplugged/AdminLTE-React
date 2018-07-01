import React from "react";
import withNotifications from "../molecules/with-notifications";

const RenderNavbar = props => (
  <div className="navbar-custom-menu">{props.render(props)}</div>
);

export default withNotifications(RenderNavbar);
