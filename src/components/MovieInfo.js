import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
// import Movies from "./Movies";
import "../styles/MovieInfo.css";

const MovieInfo = props => {
  return (
    <div
      className="movieinfo"
      style={{
        background: props.movie.backdrop_path
          ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${
              props.movie.backdrop_path
            }')`
          : "#000000"
      }}
    >
      <div className="movies-content">
        <div className="movieinfo-thumb">
          <div className="movies-content col-lg-4 col-md-6">
            <div className="movie__box">
              <img
                style={{ height: "450px", width: "100%" }}
                src={
                  props.movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                        props.movie.poster_path
                      }`
                    : "./images/no_image.jpg"
                }
                alt={props.movie.title}
              />
              <div className="movieinfo__text">
                <h1>
                  {props.movie.title.length < 20
                    ? `${props.movie.title}`
                    : `${props.movie.title.substring(0, 25)}...`}
                </h1>
                <h3>PLOT</h3>
                <p>{props.movie.overview}</p>
                <h3>IMDB RATING</h3>
                <div className="rating">
                  <meter
                    min="0"
                    max="100"
                    optimun="100"
                    low="40"
                    high="70"
                    value={props.movie.vote_average * 10}
                  />
                  <p className="score">{props.movie.vote_average}</p>
                </div>
                <h3>{props.directors.length > 1 ? "Directors" : "Director"}</h3>
                {props.directors.map((director, i) => {
                  return (
                    <p key={i} className="director">
                      {director.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
