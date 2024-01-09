import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Contact from "./components/pages/contacts/Contact";
import Projects from "./components//pages/projects/Projects";
import About from "./components/pages/about/About";
import Photography from "./components/pages/photography/Photography";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/photography" component={Photography} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
