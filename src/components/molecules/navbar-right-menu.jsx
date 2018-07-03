import React, { Component } from 'react';
import { connect } from "react-redux";

import { requestNotifications } from "../../store/notifications/actions";

class NavbarRightMenu extends Component {
    componentDidMount() {
      !!this.props.notifications.loading || this.props.requestNotifications();
      setInterval(() => {this.props.requestNotifications();}, 5000);
    }

    render() {
      const { notifications } = this.props;
      return (
            <nav className="navbar navbar-static-top">
                <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                {this.props.render(notifications)}
                </div>
            </nav>
        )
    }
  }

  const mapStateToProps = state => ({
    notifications: state.notifications
  });

  const mapDispatchToProps = dispatch => ({
    requestNotifications: () => dispatch(requestNotifications())
  });

export default connect(mapStateToProps,mapDispatchToProps)(NavbarRightMenu);