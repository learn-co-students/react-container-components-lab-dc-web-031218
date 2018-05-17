// Code SearchableMovieReviewsContainer Here
import React from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  filteredByTerm = searchTerm => {
    if (this.state.searchTerm != "") {
      let searchURL =
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" +
        searchTerm +
        `api-key=${NYT_API_KEY}`;
      fetch(searchURL)
        .then(response => response.json())
        .then(json => this.setState({ reviews: json.results }));
    } else {
      return this.state.reviews;
    }
  };

  didMount = url => {
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ reviews: json.results }));
  };

  render() {
    return (
      <MovieReviews
        className="searchable-movie-reviews"
        reviews={this.state.reviews}
      />
    );
  }
}

export default SearchableMovieReviewsContainer;
