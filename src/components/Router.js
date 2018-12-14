import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../containers/MoviesContainer";
import Header from "./Header";
import NotFound from "./NotFound";
import MovieContainer from "../containers/MovieContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:movieId" component={MovieContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Router;
