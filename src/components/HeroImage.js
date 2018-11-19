import React from "react";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import "../styles/HeroImage.css";

const HeroImage = props => {
  return (
    <div
      className="heroImage"
      style={{
        width: "100%",
        height: "400px",
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%),
        url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.image}'), #1c1c1c`
      }}
    >
      <div className="heroImage-content">
        <div className="heroImage-text">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
