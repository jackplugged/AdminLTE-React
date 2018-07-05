import React, { Fragment } from "react";
import MainHeader from "../components/header/main-header";
import MainSidebar from "../components/sidebar/main-sidebar";

const Main = props => (
  <Fragment>
    <MainHeader />
    <MainSidebar />
    {props.children}
  </Fragment>
);

export default Main;
