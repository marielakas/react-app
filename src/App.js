import React from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import styles from "./styles.css";

const Test = () => {
  return <div>TEST</div>;
};

const App = () => {
  return (
    <div id="layout">
      <header className={styles.test}>App header</header>
      <Switch>
        <Route exact path="/test" component={Test} />
      </Switch>
    </div>
  );
};

export default hot(module)(App);
