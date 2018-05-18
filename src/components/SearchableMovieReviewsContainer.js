// Code SearchableMovieReviewsContainer Here
import React from "react";
import MovieReviews from "./MovieReviews";
import "es6-promise";

import "isomorphic-fetch";

const NYT_API_KEY = "5e3ca97c18eb4a08aeb3e13e3b963d80";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  getReviews() {
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          reviews: json.results,
          searchTerm: ""
        });
      });
  }

  render() {
    this.getReviews();
    return (
      <section className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </section>
    );
  }
}
