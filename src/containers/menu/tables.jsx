import { connect } from "react-redux";
import SidebarItem from 'components/sidebar/sidebar-menu/sidebar-item';

const mapStateToProps = ({ notifications: { data } }) => {
  console.log(data);
  return ({   
    item:{
      text: "Tables",
      icon: "table",
      items: [{
          href: "/home",
          icon: "circle-o",
          text: "Simple Tables",
          notifications: [
            {
              text: "new",
              color: 'green'
            },
          ]
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