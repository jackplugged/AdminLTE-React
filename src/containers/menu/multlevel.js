import { connect } from "react-redux";
import SidebarItem from "components/sidebar/sidebar-menu/sidebar-item";

const mapStateToProps = () => {
  return {
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
                text: "Level 3 ",
                notifications: [{
                  text: "importante !",
                  color: 'green'
                }, ],
              }]
            }
          ]
        }
      ]
    }
  }
}

export default connect(mapStateToProps)(SidebarItem);