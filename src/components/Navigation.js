import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = props => {
  const { movieTitle } = props;
  return (
    <div className="navigation">
      <div className="navigation-content">
        <Link to="/" className="navigation-link">
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{movieTitle}</p>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  movieTitle: PropTypes.string
};

export default Navigation;
