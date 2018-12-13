import React from "react";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import Navigation from "./Navigation";
import "../styles/Movie.css";
import Spinner from "./Spinner";

class Movie extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  render() {
    const { genres, activeMovie, directors, actors, loading } = this.props;

    const genre = genres.map((genre, i) => {
      return <p key={i}> {genre.name} </p>;
    });

    const director = directors.map((director, i) => {
      return <p key={i}>{director.name}</p>;
    });
    const actorsList = actors;
    const newActors = actorsList.slice(0, 4);
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
