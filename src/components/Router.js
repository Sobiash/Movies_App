import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Header from "./Header";
import NotFound from "./NotFound";
import Movie from "./Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/Movies_App" component={App} />
          <Route path="/:movieId" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Router;
