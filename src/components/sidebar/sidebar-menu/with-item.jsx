import React from 'react';
import SidebarItem from 'components/sidebar/sidebar-menu/sidebar-item';

const withItem = Component => props => class extends React.Component {
    render() {
      return <Component {...props} />
    }
  }

export default withItem(SidebarItem);