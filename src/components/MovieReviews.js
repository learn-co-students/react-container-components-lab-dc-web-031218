// Code MovieReviews Here
import React from "react";
import Movie from "./Movie";

const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(movieObj => {
        return <Movie className="review" review={movieObj} />;
      })}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
