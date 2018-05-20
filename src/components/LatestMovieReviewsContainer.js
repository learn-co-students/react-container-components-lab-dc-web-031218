import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			reviews: []
		}
	}

	componentDidMount(){
		console.log("LatestMovieReviewsContainer::componentDidMount()");
		fetch(URL)
			.then(response=>response.json())
			.then(json => {
				let id = 0;
				json.results.forEach(review => {
					review["id"] = id;
					id++;
				})

				this.setState({
					reviews: json.results
				}, ()=>console.log(this.state.reviews))
			})//end then
	}
	render(){
		return(
			<div style={{margin: 10, border: "1px solid blue"}}
				 className="latest-movie-reviews">
				<h1>LatestMovieReviewsContainer</h1>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default LatestMovieReviewsContainer;