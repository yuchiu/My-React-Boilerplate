import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import PageWrapper from "./PageWrapper";

const Routes = () => (
  <BrowserRouter>
    <PageWrapper>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/:unfoundLocation" component={NotFoundPage} />
      </Switch>
    </PageWrapper>
  </BrowserRouter>
);

export default Routes;
