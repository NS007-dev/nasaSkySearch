import React from "react";

const Photo = (props) => (
  <div>
    <div className="title">
      <h2>{props.photo.title}</h2>
    </div>
    <img src={props.photo.url} alt={props.photo.title} />
    <div className="details">
      <p>{props.photo.explanation}</p>
    </div>
  </div>
);

export default Photo;
