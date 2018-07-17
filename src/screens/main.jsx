import React, { Fragment } from "react";
import MainHeader from "components/header/main-header";
import MainSidebar from "components/sidebar/main-sidebar";
import MainFooter from "components/footer/main-footer";

const Main = props => (
  <Fragment>
    <MainHeader />
    <MainSidebar />
    <div className="content-wrapper">
      <section className="content">
         {props.children}
       </section>
    </div>
    <MainFooter />
  </Fragment>
);

export default Main;
