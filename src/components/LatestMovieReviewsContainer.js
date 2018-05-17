import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "57d2b860c691474fb7dbeb8993d2c353";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  didMount = () => {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  };

  render() {
    return (
      <MovieReviews
        className="latest-movie-reviews"
        reviews={this.state.reviews}
      />
    );
  }
}

export default LatestMovieReviewsContainer;
