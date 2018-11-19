import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import img from "./images/no_image.jpg";
import "../styles/Movies.css";

const Movies = props => {
  return (
    <div className="movies container">
      <div className="row">
        {props.movies.map(movie => {
          console.log(movie);
          return (
            <div className="movies-content col-lg-4 col-md-6" key={movie.id}>
              <div className="movie__box">
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                      : { img }
                  }
                  alt={movie.title}
                />
                <div className="movie__text">
                  <h3>
                    {movie.title.length < 20
                      ? `${movie.title}`
                      : `${movie.title.substring(0, 25)}...`}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
