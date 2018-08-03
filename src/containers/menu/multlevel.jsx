import React from "react";
import { connect } from "react-redux";

import TreeviewMenu from "components/sidebar/treeview/treeview-menu";
import TreeviewItem from "components/sidebar/treeview/treeview-item";
import TreeviewNotification from "components/sidebar/treeview/treeview-notification";

const Multlevel = ({ notifications, tasks, messages }) => {
  return (
    <TreeviewItem text="Mensagens" icon="list" dropdown='parent' menu={ ({ isOpen }) =>       
       <TreeviewMenu open={isOpen}>
          <TreeviewItem text="Notificações" icon="table" />
          <TreeviewItem text="Notificações" icon="table" dropdown='child' menu={ ({ isOpen }) =>
             <TreeviewMenu open={isOpen}>
                <TreeviewItem text="Notificações" icon="table" />
            </TreeviewMenu>}>
          </TreeviewItem>
       </TreeviewMenu>}>
    </TreeviewItem>
    );
};

/*
      <TreeviewNotification color="blue" text={`${notifications}`} />
      <TreeviewMenu>
        <TreeviewItem text="Notificações" icon="table" />
        <TreeviewItem text="E-mails" icon="flag-o" dropdown>
          <TreeviewMenu>
            <TreeviewItem text="Notificações" icon="circle-o">
              <TreeviewNotification color="yellow" text={`${tasks}`} />
              <TreeviewNotification color="red" text={`${messages}`} />
            </TreeviewItem>
          </TreeviewMenu>
        </TreeviewItem>
      </TreeviewMenu>

*/

const mapStateToProps = ({ notifications: { data } }) => ({
  notifications: data.notifications.length,
  tasks: data.tasks.length,
  messages: data.messages.length
});

export default connect(mapStateToProps)(Multlevel);
