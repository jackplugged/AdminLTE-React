import React from "react";

import Header from "../molecules/header";
import Nav from "../molecules/nav";
import RenderNavbar from "../molecules/render-navbar";
import NavbarMenu from "../molecules/navbar-menu";
import DropdowNotifications from "../molecules/dropdown-notifications";
import Notification from "../atoms/notification";
import TaskNotification from "../atoms/task-notification";
import UserNotification from '../atoms/user-notification';

const MainHeader = () => (
  <Header>
    <Nav>
      <RenderNavbar
        render={({ data: { notifications, tasks, messages } }) => (
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
        )}
      />
    </Nav>
  </Header>
);

export default MainHeader;
