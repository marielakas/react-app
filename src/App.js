import React from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

const Test = () => {
  return <div>TEST</div>;
};

const App = () => {
  return (
    <div id="layout">
      <header>App header</header>
      <Switch>
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
