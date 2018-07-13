import React from 'react';
import SidebarItem from '../sidebar-menu/sidebar-item';

const items = {
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
      text: "Data Tables"
    }
  ]
};

const Tables = () => <SidebarItem items={items.items} {...items} />;

export default Tables;
