import {
  GET_MOVIE,
  MOVIE_CREW,
  SHOW_LOADING_SPINNER,
  CLEAR_MOVIE,
  MOVIE_PERSISTED_STATE
} from "../actions/types";

const initialState = {
  loading: false,
  activeMovie: [],
  directors: [],
  actors: [],
  genres: []
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_PERSISTED_STATE:
      return {
        ...state,
        ...action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        activeMovie: action.payload.activeMovie,
        genres: action.payload.genres,
        loading: false
      };
    case MOVIE_CREW:
      return {
        ...state,
        actors: action.payload.actors,
        directors: action.payload.directors,
        loading: false
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        activeMovie: [],
        directors: [],
        actors: [],
        genres: []
      };
    default:
      return state;
  }
};

export default MovieReducer;
