import React, { Fragment } from "react";
import MainHeader from "../../organisms/main-header";

const Main = props => (
  <Fragment>
    <MainHeader />
    {props.children}
  </Fragment>
);

export default Main;
