// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component{
 constructor(props){
 	super(props)
 	this.state = {
 		reviews: [],
 		searchTerm: ""
 	}
 }

 render(){
 	return(
 		<div className="searchable-movie-reviews">
 		<MovieReviews />
 		</div>
 		)
 }
}
export default SearchableMovieReviewsContainer;