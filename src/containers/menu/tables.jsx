import { connect } from "react-redux";
import SidebarItem from 'components/sidebar/sidebar-menu/sidebar-item';

const mapStateToProps = ({ notifications: { data } }) => {
  return ({   
    item:{
      text: "Tables",
      icon: "table",
      notifications: [
        {
          text: "new",
          color: 'blue'
        },
      ],
      items: [{
          href: "/home",
          icon: "circle-o",
          text: "Simple Tables",         
        },
        {
          href: "pages/tables/data.html",
          icon: "circle-o",
          text: "Data Tables ",
          notifications: [
            {
              text: data.notifications.length,
              color: 'blue'
            },
            {
              text: data.messages.length,
              color: 'yellow'
            },
            {
              text: data.tasks.length,
              color: 'red'
            }
          ]         
        }
      ]
    }
  })  
};

export default connect(mapStateToProps)(SidebarItem);