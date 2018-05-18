import "es6-promise";

import "isomorphic-fetch";
import React, { Component } from "react";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "5e3ca97c18eb4a08aeb3e13e3b963d80";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  getReviews() {
    fetch(URL)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        this.setState({ reviews: json.results }, () => {});
      });
  }

  render() {
    this.getReviews();
    return (
      <section className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </section>
    );
  }
}
