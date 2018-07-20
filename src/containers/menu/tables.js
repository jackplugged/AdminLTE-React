import { connect } from "react-redux";
import SidebarItem from "components/sidebar/sidebar-menu/sidebar-item";

const mapStateToProps = ({ notifications: { data } }) => {
  return {
    item: {
      text: "Mensagens",
      icon: "table",
      notifications: [
        {
          text: "novas !",
          color: "blue"
        }
      ],
      items: [
        {
          href: "/home",
          icon: "flag-o",
          text: "Notificações",
          notifications: [
            {
              text: data.notifications.length,
              color: "green"
            }
          ]
        },
        {
          href: "pages/tables/data.html",
          icon: "bell-o",
          text: "Alertas",
          notifications: [
            {
              text: data.tasks.length,
              color: "yellow"
            }
          ]
        },
        {
          href: "pages/tables/data.html",
          icon: "envelope-o",
          text: "E-Mails",
          notifications: [
            {
              text: data.messages.length,
              color: "red"
            }
          ]
        }
      ]
    }
  };
};

export default connect(mapStateToProps)(SidebarItem);
