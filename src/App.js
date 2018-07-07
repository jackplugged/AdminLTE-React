import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Main from "./screens/main";
import Routes from "./routes/routes.js";

import "./assets/js/jquery";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/AdminLTE.css";
import "./assets/css/skins/skin-blue.css";
import "font-awesome-animation/dist/font-awesome-animation.min.css";

import "bootstrap/dist/js/bootstrap.min";
import "./assets/js/adminlte";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main>
          <Switch>
            {Routes.map((prop, key) => {
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </Main>
      </Provider>
    );
  }
}

export default App;
