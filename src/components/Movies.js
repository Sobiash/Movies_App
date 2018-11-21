import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

import "../styles/Movies.css";

const Movies = props => {
  return (
    <div className="movies-content col-lg-4 col-md-6" key={props.movie.id}>
      <div className="movie__box">
        <img
          style={{ height: "450px", width: "100%" }}
          src={
            props.movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
              : "/images/no_image.jpg"
          }
          alt={props.movie.title}
        />
        <div className="movie__text">
          <h3>
            {props.movie.title.length < 20
              ? `${props.movie.title}`
              : `${props.movie.title.substring(0, 25)}...`}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Movies;
