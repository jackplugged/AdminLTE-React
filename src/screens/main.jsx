import React, { Fragment } from "react";
import MainHeader from "../components/header/main-header";
import MainSidebar from "../components/sidebar/main-sidebar";

const Main = props => (
  <Fragment>
    <MainHeader />
    <MainSidebar />
    <div class="content-wrapper">
      <section class="content">
         {props.children}
       </section>
    </div>
  </Fragment>
);

export default Main;
