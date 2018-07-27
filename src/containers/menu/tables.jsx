import React from 'react';
import { connect } from "react-redux";

import TreeviewMenu from "components/sidebar/treeview/treeview-menu";
import TreeviewItem from "components/sidebar/treeview/treeview-item";
import TreeviewNotification from "components/sidebar/treeview/treeview-notification";

const Tables = ({ notifications, tasks, messages }) => {  
   return (
    <TreeviewItem text="Mensagens" icon="table" dropdown>     
          <TreeviewNotification color="blue" text={`${notifications}`} />            
            <TreeviewMenu>
                <TreeviewItem text="Notificações" icon="flag-o"/>                 
                <TreeviewItem text="Notificações" icon="flag-o" dropdown> 
                   <TreeviewMenu>
                      <TreeviewItem text="Notificações" icon="circle-o"> 
                        <TreeviewNotification color="yellow" text={`${tasks}`} />   
                        <TreeviewNotification color="red" text={`${messages}`} />                     
                      </TreeviewItem>
                   </TreeviewMenu>                 
                </TreeviewItem>
            </TreeviewMenu>         
    </TreeviewItem>
)};

const mapStateToProps =  ({ notifications: { data } }) => ({
  notifications: data.notifications.length,
  tasks: data.tasks.length,
  messages: data.messages.length
});

export default connect(mapStateToProps)(Tables);
