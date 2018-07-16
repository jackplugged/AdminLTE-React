import { connect } from "react-redux";
import SidebarItem from 'components/sidebar/sidebar-menu/sidebar-item';

const mapStateToProps = ({ notifications: { data } }) => {
  return ({   
    item:{
      text: "Tables",
      icon: "table",
      items: [{
          href: "/home",
          icon: "circle-o",
          text: "Simple Tables",
        },
        {
          href: "pages/tables/data.html",
          icon: "circle-o",
          text: "Data Tables ",
          count: data.notifications.length,
          color: 'blue'
        }
      ]
    }
  })  
};

export default connect(mapStateToProps)(SidebarItem);