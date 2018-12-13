import { API_URL, API_KEY } from "../config";
import {
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  LOAD_MORE_MOVIES,
  CLEAR_MOVIES,
  SHOW_LOADING_SPINNER,
  MOVIES_PERSISTED_STATE,
  GET_MOVIE,
  MOVIE_CREW,
  CLEAR_MOVIE,
  MOVIE_PERSISTED_STATE
} from "./types";

export const getPopularMovies = () => dispatch => {
  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  fetch(endpoint)
    .then(data => data.json())
    .then(data =>
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: data
      })
    );
};

export const searchMovies = searchTerm => dispatch => {
  let endpoint;
  if (searchTerm === "") {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`;
  }
  fetch(endpoint)
    .then(data => data.json())
    .then(data =>
      dispatch({
        type: SEARCH_MOVIES,
        payload: { ...data, searchTerm }
      })
    );
};

export const loadMoreMovies = (searchTerm, currentPage) => dispatch => {
  let endpoint;
  if (searchTerm === "") {
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
      1}`;
  } else {
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=${currentPage +
      1}`;
  }
  fetch(endpoint)
    .then(data => data.json())
    .then(data =>
      dispatch({
        type: LOAD_MORE_MOVIES,
        payload: data
      })
    );
};

export const loadingSpinner = () => {
  return {
    type: SHOW_LOADING_SPINNER,
    payload: null
  };
};

export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
    payload: null
  };
};

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE,
    payload: null
  };
};

export const getMovie = movieId => dispatch => {
  const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&langyage=en-US`;
  const data1 = fetch(endpoint)
    .then(data => data.json())
    .then(data => {
      dispatch({
        type: GET_MOVIE,
        payload: {
          activeMovie: data,
          genres: data.genres
        }
      });
    });

  const endpoint1 = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  const data2 = fetch(endpoint1)
    .then(data => data.json())
    .then(data => {
      const directors = data.crew.filter(member => member.job === "Director");
      const actors = data.cast;
      dispatch({
        type: MOVIE_CREW,
        payload: {
          directors,
          actors
        }
      });
    });

  return data1, data2;
};

export const moviesPersistedState = state => {
  return {
    type: MOVIES_PERSISTED_STATE,
    payload: state
  };
};

export const moviePersistedState = state => {
  return {
    type: MOVIE_PERSISTED_STATE,
    payload: state
  };
};
