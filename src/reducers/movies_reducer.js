import {
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  LOAD_MORE_MOVIES,
  CLEAR_MOVIES,
  SHOW_LOADING_SPINNER,
  MOVIES_PERSISTED_STATE
} from "../actions/types";

const initialState = {
  movies: [],
  heroImage: "",
  loading: false,
  currentPage: 0,
  totalPages: 0,
  searchTerm: ""
};

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_PERSISTED_STATE:
      return {
        ...state,
        ...action.payload
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        heroImage: state.heroImage || action.payload.results[0],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: ""
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        searchTerm: action.payload.searchTerm
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: []
      };
    case SHOW_LOADING_SPINNER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default MoviesReducer;
