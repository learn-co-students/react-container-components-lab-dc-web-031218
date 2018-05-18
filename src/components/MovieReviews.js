// Code MovieReviews Here
import React from "react";
// import testreviews from "./test-reviews";
const Review = props => {
  return (
    <li>
      {Object.entries(props.review).map((k, i) => {
        return <p key={i}>{`${k[0]}: ${k[1]}`}</p>;
      })}
      <br />
    </li>
  );
};

const MovieReviews = props => {
  return (
    <section className="review-list">
      <ul>
        {props.reviews.map((r, i) => {
          return <Review key={i} review={r} className="review" />;
        })}
      </ul>
    </section>
  );
};

MovieReviews.defaultProps = {
  reviews: {}
};

export default MovieReviews;
