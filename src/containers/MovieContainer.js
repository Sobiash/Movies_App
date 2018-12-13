import React from "react";
import { connect } from "react-redux";
import {
  getMovie,
  clearMovie,
  moviePersistedState,
  loadingSpinner
} from "../actions/Actions";
import Movie from "../components/Movie";

class MovieContainer extends React.Component {
  componentDidMount = () => {
    const { movieId } = this.props.match.params;
    if (sessionStorage.getItem(`${movieId}`)) {
      const state = JSON.parse(sessionStorage.getItem(`${movieId}`));
      this.props.moviePersistedState(state);
    } else {
      this.getMovie(movieId);
    }
  };

  componentDidUpdate = () => {
    const { movieId } = this.props.match.params;
    const { activeMovie, actors, directors, genres } = this.props;

    if (this.props.activeMovie) {
      const state = { activeMovie, actors, directors, genres };
      sessionStorage.setItem(`${movieId}`, JSON.stringify(state));
    }
  };

  getMovie = movieId => {
    this.props.clearMovie();
    this.props.loadingSpinner();
    this.props.getMovie(movieId);
  };
  render() {
    return (
      <Movie
        activeMovie={this.props.activeMovie}
        directors={this.props.directors}
        actors={this.props.actors}
        genres={this.props.genres}
        loading={this.props.loading}
      />
    );
  }
}

const mapStateToProps = state => ({
  activeMovie: state.movie.activeMovie,
  loading: state.movie.loading,
  actors: state.movie.actors,
  directors: state.movie.directors,
  genres: state.movie.genres
});

const mapDispatchToProps = {
  getMovie,
  clearMovie,
  loadingSpinner,
  moviePersistedState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
