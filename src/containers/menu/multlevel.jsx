import withSidebarItem from 'components/sidebar/sidebar-menu/with-sidebar-item';

const multilevel = {
  item: {
    text: "Multilevel",
    icon: "table",
    notifications: [
      {
        text: "new",
        color: 'green'
      },
    ],
    items: [{
        href: "pages/tables/data.11.html",
        icon: "circle-o",
        text: "Level 1 item 1"
      },
      {
        icon: "circle-o",
        text: "Level 1 item 2",
        items: [{
            href: "pages/tables/data.21.html",
            icon: "circle-o",
            text: "Level 2 item 1"
          },
          {
            icon: "circle-o",
            text: "Level 2 item 2",
            items: [{
              href: "pages/tables/data.31.html",
              icon: "circle-o",
              text: "Level 3 item 1"
            }]
          }
        ]
      }
    ]
  }
};

export default withSidebarItem(multilevel);