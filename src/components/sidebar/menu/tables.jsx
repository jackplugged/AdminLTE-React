import React from 'react';
import { connect } from "react-redux";

import SidebarItem from '../sidebar-menu/sidebar-item';

const mapStateToProps = state => {
 
  return ({
  notifications: state.notifications,
  text: "Tables",
  icon: "table",
  items: [
    {
      href: "/home",
      icon: "circle-o",
      text: "Simple Tables"
    },
    {
      href: "pages/tables/data.html",
      icon: "circle-o",
      text: "Data Tables "+ state.notifications.data.notifications.length
    }
  ]
})};

const Tables = props => <SidebarItem items={props.items}  {...props} />;

export default connect(mapStateToProps)(Tables);

