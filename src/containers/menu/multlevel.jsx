import withItem from 'components/sidebar/sidebar-menu/with-item';

const multilevel = {
  item: {
    text: "Multilevel",
    icon: "table",
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

export default withItem(multilevel);