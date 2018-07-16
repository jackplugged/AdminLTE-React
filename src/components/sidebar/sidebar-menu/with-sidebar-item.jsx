import React from 'react';
import SidebarItem from 'components/sidebar/sidebar-menu/sidebar-item';

const withSidebarItem = Component => props => class extends React.Component {
    render() {
      return <Component {...props} />
    }
  }

export default withSidebarItem(SidebarItem);