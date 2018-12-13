import React from "react";
import App from "../App";
import { connect } from "react-redux";
import {
  getPopularMovies,
  searchMovies,
  loadMoreMovies,
  clearMovies,
  loadingSpinner,
  moviesPersistedState
} from "../actions/Actions";

class MoviesContainer extends React.Component {
  componentDidMount = () => {
    // this.getMovies();
    if (sessionStorage.getItem("HomeState")) {
      const state = JSON.parse(sessionStorage.getItem("HomeState"));
      this.props.moviesPersistedState(state);
    } else {
      this.getMovies();
    }
  };

  componentDidUpdate = () => {
    if (this.props.movies.length > 0) {
      if (this.props.searchTerm === "") {
        sessionStorage.setItem("HomeState", JSON.stringify(this.props));
      }
    }
  };

  getMovies = () => {
    this.props.loadingSpinner();
    this.props.getPopularMovies();
  };

  searchMovies = searchTerm => {
    this.props.clearMovies();
    this.props.loadingSpinner();
    this.props.searchMovies(searchTerm);
  };
  loadMoreMovies = () => {
    const { searchTerm, currentPage } = this.props;
    this.props.loadingSpinner();
    this.props.loadMoreMovies(searchTerm, currentPage);
  };
  render() {
    return (
      <App
        {...this.props}
        searchMovies={this.searchMovies}
        loadMoreMovies={this.loadMoreMovies}
      />
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies.movies,
  heroImage: state.movies.heroImage,
  loading: state.movies.loading,
  currentPage: state.movies.currentPage,
  totalPages: state.movies.totalPages,
  searchTerm: state.movies.searchTerm
});

const mapDispatchToProps = {
  getPopularMovies,
  searchMovies,
  loadMoreMovies,
  clearMovies,
  loadingSpinner,
  moviesPersistedState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
