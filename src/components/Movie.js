import React from "react";

const Movie = props => {
  return (
    <div>
      <h2>Movie: {props.review.display_title}</h2>
      <p>{props.review.headline}</p>
      <p>{props.review.summary_short}</p>
      <p>By: {props.review.byline}</p>
    </div>
  );
};
export default Movie;
