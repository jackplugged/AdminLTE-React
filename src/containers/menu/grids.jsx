import React from "react";
import { connect } from "react-redux";

import TreeviewMenu from "components/sidebar/treeview/treeview-menu";
import TreeviewItem from "components/sidebar/treeview/treeview-item";
import TreeviewNotification from "components/sidebar/treeview/treeview-notification";



const Grids = ({ notifications }) => {
  return (
    <TreeviewItem text="Grids" icon="list" dropdown>
      <TreeviewNotification color="blue" text={`${notifications}`} />
      <TreeviewMenu>
        <TreeviewItem text="Notificações" icon="table" />
      </TreeviewMenu>
    </TreeviewItem>
  );
};

const mapStateToProps = ({ notifications: { data } }) => ({
  notifications: data.notifications.length
});

export default connect(mapStateToProps)(Grids);
