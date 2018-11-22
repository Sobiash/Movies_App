import React from "react";
import { IMAGE_BASE_URL } from "../config";
import "../styles/Actor.css";

const Actor = props => {
  const POSTER_SIZE = "w154";
  return (
    <div className="actor">
      <img
        src={
          props.actor.profile_path
            ? `${IMAGE_BASE_URL}${props.actor.profile_path}`
            : "./images/no_image.jpg"
        }
        alt="actorprofile"
      />
      <span className="actor-name">{props.actor.name}</span>
      <span className="actor-character">{props.actor.character}</span>
    </div>
  );
};
export default Actor;
