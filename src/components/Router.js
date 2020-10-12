// Routing page
// Remember to install react router dom via command npm i react-router-dom
// Remember to import and render Browser router in index.js

import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Contact from "./Contact";
import About from "./About";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/About" component={About} />
  </Switch>
);

export default Router;
