import React, { Component } from "react";
import { connect } from "react-redux";

import { requestNotifications } from "store/notifications/actions";

class HeaderContainer extends Component {
  componentDidMount() {
   // !!this.props.notifications.loading || this.props.requestNotifications();
   // setInterval(() => { this.props.requestNotifications(); }, 50000);
  }

  render() {
    const { notifications } = this.props;
    return (
      <header className="main-header">
        <a href="" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </a>
        {this.props.render(notifications)}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  requestNotifications: () => dispatch(requestNotifications())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
