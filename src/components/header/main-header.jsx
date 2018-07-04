import React from "react";

import HeaderContainer from "./navbar-right-menu/header-container";
import NavbarRightMenu from "./navbar-right-menu/navbar-right-menu";
import NavbarMenu from "./navbar-right-menu/navbar-menu";
import DropdowNotifications from "./navbar-right-menu/dropdown-notifications";
import Notification from "./navbar-right-menu/notification";
import TaskNotification from "./navbar-right-menu/task-notification";
import UserNotification from './navbar-right-menu/user-notification';

const MainHeader = () => (
  <HeaderContainer render={({ data: { notifications, tasks, messages } }) => (
      <NavbarRightMenu>
          <NavbarMenu>
            <DropdowNotifications className={"notifications-menu"} icon={"flag-o"} label={"label-success"}>
              {notifications.map(({ id, ...notification }) => <Notification key={id} {...notification} />)}
            </DropdowNotifications>
            <DropdowNotifications className={"tasks-menu"} icon={"bell-o"} label={"label-warning"}>
              {tasks.map(({ id, ...task }) => <TaskNotification key={id} {...task} />)}
            </DropdowNotifications>
            <DropdowNotifications className={"messages-menu"} icon={"envelope-o"} label={"label-danger  "}>
              {messages.map(({ id, ...message }) => <UserNotification key={id} {...message} />)}
            </DropdowNotifications>
          </NavbarMenu>     
       </NavbarRightMenu> 
    )}
   />      
);

export default MainHeader;
