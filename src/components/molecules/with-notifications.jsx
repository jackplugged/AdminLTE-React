import React, { Component } from "react";
import { connect } from "react-redux";

import { requestNotifications } from "../../store/notifications/actions";

export const withNotifications = MyComponent => {
  class ContainerNotifications extends Component {
    componentDidMount() {
      !!this.props.notifications.loading || this.props.requestNotifications();
      setInterval(() => {this.props.requestNotifications();}, 20000);
    }

    render() {
      const { notifications, render } = this.props;
      return <MyComponent render={render} {...notifications}/>;
    }
  }

  const mapStateToProps = state => ({
    notifications: state.notifications
  });

  const mapDispatchToProps = dispatch => ({
    requestNotifications: () => dispatch(requestNotifications())
  });

  return connect(mapStateToProps,mapDispatchToProps)(ContainerNotifications);
};

export default withNotifications;
