import React, { Fragment } from "react";

import MainHeader from "components/header/main-header";
import MainSidebar from "components/sidebar/main-sidebar";
import MainFooter from "components/footer/main-footer";
import MainContentWrapper from "components/content/main-content-wrapper";

const Main = props => (
  <Fragment>
    <MainHeader />
    <MainSidebar />
      <MainContentWrapper>
       {props.children}
      </MainContentWrapper>
    <MainFooter />
  </Fragment>
);

export default Main;
