import React from "react";
import PropTypes from "prop-types";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

import "../styles/HeroImage.css";

const HeroImage = props => {
  const { image, title } = props;
  return (
    <div
      className="heroImage"
      style={{
        width: "100%",
        background: `linear-gradient(to bottom, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.08) 49%, rgba(0,0,0,0.40) 61%,rgba(0,0,0,1) 95%),
        url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${image}')`
      }}
    >
      <div className="heroImage-content">
        <div className="heroImage-text">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default HeroImage;
