import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import Movie from "./Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:movieId" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
