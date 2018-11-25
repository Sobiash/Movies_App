import React from "react";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { Link } from "react-router-dom";

import "../styles/Movies.css";

const Movies = props => {
  return (
    <div className="movies-content col-lg-4 col-md-6">
      {props.clickable ? (
        <Link
          to={{ pathname: `/${props.movkey}`, movieName: `${props.movieName}` }}
        >
          <div className="movie__box">
            <img
              style={{
                height: "450px",
                width: "100%",
                borderBottom: "2px solid #f5821e"
              }}
              src={
                props.movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                  : "/Movies_App/images/no_image.jpg"
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
        </Link>
      ) : (
        <div className="movie__box">
          <img
            style={{ height: "450px", width: "100%" }}
            src={
              props.movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`
                : "./images/no_image.jpg"
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
      )}
    </div>
  );
};

Movies.propTypes = {
  clickable: PropTypes.bool,
  movkey: PropTypes.number,
  movieName: PropTypes.string,
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string
  })
};

export default Movies;
