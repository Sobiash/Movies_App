import { API_URL, API_KEY } from "../config";
import {
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES,
  LOAD_MORE_MOVIES,
  CLEAR_MOVIES,
  SHOW_LOADING_SPINNER
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
