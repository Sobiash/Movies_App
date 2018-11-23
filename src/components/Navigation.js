import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="navigation-content">
        <Link to="/" className="navigation-link">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movieTitle}</p>
      </div>
    </div>
  );
};

export default Navigation;
