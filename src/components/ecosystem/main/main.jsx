import React, { Fragment } from "react";
import MainHeader from "../../organisms/main-header";
import MainSidebar from "../../organisms/main-sidebar";

const Main = props => (
  <Fragment>
    <MainHeader />
    <MainSidebar />
    {props.children}
  </Fragment>
);

export default Main;
