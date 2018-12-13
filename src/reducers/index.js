import { combineReducers } from "redux";
import MovieReducer from "./movie_reducer";
import MoviesReducer from "./movies_reducer";

const rootReducer = combineReducers({
  movie: MovieReducer,
  movies: MoviesReducer
});

export default rootReducer;
