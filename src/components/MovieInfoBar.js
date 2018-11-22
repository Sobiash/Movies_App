import React from "react";
import { calcTime, convertMoney } from "../helpers";
import "../styles/MovieInfoBar.css";

const MovieInfoBar = props => {
  return (
    <div className="movieinfobar">
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info">
            Running Time: {calcTime(props.time)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info">
            Budget : {convertMoney(props.budget)}
          </span>
        </div>
        <div className="movieinfobar-content-col">
          <span className="movieinfobar-info">
            Revenue : {convertMoney(props.revenue)}
          </span>
        </div>
      </div>
      MovieInfoBar
    </div>
  );
};

export default MovieInfoBar;
