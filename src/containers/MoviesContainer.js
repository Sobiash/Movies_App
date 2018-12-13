import React from "react";
import App from "../App";
import { connect } from "react-redux";
import {
  getPopularMovies,
  searchMovies,
  loadMoreMovies,
  clearMovies,
  loadingSpinner
} from "../actions/Actions";

class MoviesContainer extends React.Component {
  componentDidMount = () => {
    this.getMovies();
    // if (localStorage.getItem("HomeState")) {
    //   const state = JSON.parse(localStorage.getItem("HomeState"));
    //   this.setState({ ...state });
    // } else {
    //   this.setState({
    //     loading: true
    //   });
    //   const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    //   this.loadData(endpoint);
    // }
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

  // newPost: state.posts.item
});

const mapDispatchToProps = {
  getPopularMovies,
  searchMovies,
  loadMoreMovies,
  clearMovies,
  loadingSpinner
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesContainer);
