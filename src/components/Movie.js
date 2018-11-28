import React from "react";
import PropTypes from "prop-types";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
import Navigation from "./Navigation";
import "../styles/Movie.css";
import Spinner from "./Spinner";

class Movie extends React.Component {
  state = {
    loading: false,
    activeMovie: [],
    directors: [],
    actors: [],
    genres: []
  };

  static propTypes = {
    match: PropTypes.object
  };

  componentDidMount = async () => {
    const movieId = this.props.match.params.movieId;
    if (localStorage.getItem(`${movieId}`)) {
      const state = JSON.parse(localStorage.getItem(`${movieId}`));
      this.setState({ ...state });
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&langyage=en-US`;
      this.loadData(endpoint);
    }
  };

  loadData = async endpoint => {
    const movieId = this.props.match.params.movieId;
    const api_call = await fetch(endpoint);
    const data = await api_call.json();
    if (data.status_code) {
      this.setState({ loading: false });
    } else {
      this.setState(
        {
          activeMovie: data,
          genres: data.genres
        },
        async () => {
          const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
          const api_call = await fetch(endpoint);
          const data = await api_call.json();
          const directors = data.crew.filter(
            member => member.job === "Director"
          );
          this.setState(
            {
              actors: data.cast,
              directors,
              loading: false
            },
            () => {
              localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
            }
          );
        }
      );
    }
  };

  render() {
    const { genres, activeMovie, directors, loading } = this.state;

    const genre = genres.map((genre, i) => {
      return <p key={i}>{genre.name}</p>;
    });

    const director = directors.map((director, i) => {
      return <p key={i}>{director.name}</p>;
    });
    const actors = [...this.state.actors];
    const newActors = actors.slice(0, 4);
    const actor = newActors.map((actor, i) => {
      return <p key={i}>{actor.name}</p>;
    });

    return (
      <div className="movie">
        <div className="container">
          {activeMovie ? (
            <React.Fragment>
              <Navigation movieTitle={activeMovie.original_title} />
              <h1>{activeMovie.original_title}</h1>
              <div
                className="movieinfo container"
                style={{
                  background: activeMovie.backdrop_path
                    ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
                        activeMovie.backdrop_path
                      }')`
                    : "#000000"
                }}
              />
            </React.Fragment>
          ) : null}

          {loading ? <Spinner /> : null}
          {activeMovie ? (
            <div className="details container">
              <div className="row">
                <div className="col-lg-8 col-xs-12">
                  <h2>More Information About {activeMovie.original_title}</h2>
                  <div className="movie-content">
                    <p>Release Date: </p>
                    <p>{activeMovie.release_date}</p>
                  </div>
                  <div className="movie-content">
                    <p>Duration: </p>
                    <p> {activeMovie.runtime} minutes</p>
                  </div>
                  <p className="movie-overview">{activeMovie.overview}</p>
                  <div className="table">
                    <div className="table-cell">
                      <p>Genre:</p>
                      {genre}
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-cell">
                      <p>Original Title: </p>
                      <p>{activeMovie.original_title}</p>
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-cell">
                      <p>Director:</p>
                      {director}
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-cell">
                      <p>Actors:</p>
                      {actor}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    style={{
                      height: "450px",
                      width: "100%",
                      borderBottom: "2px solid #f5821e"
                    }}
                    src={
                      activeMovie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                            activeMovie.poster_path
                          }`
                        : "./images/no_image.jpg"
                    }
                    alt={activeMovie.title}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Movie;
