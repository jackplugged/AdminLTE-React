import React from "react";
import { connect } from "react-redux";

const Home = ({ notifications: { data } }) => (
  <ul>{data.notifications.map(notification => <li key={notification.id}>{notification.text}</li>)}</ul>
);

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps)(Home);
