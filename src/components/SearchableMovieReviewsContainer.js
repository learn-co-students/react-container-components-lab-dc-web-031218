import React from 'react';
import MovieReviews from './MovieReviews'
import $ from 'jquery';
// Code SearchableMovieReviewsContainer Here
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchTerm: "",
			reviews: []
		}
	}

	handleChange = (e) =>{
		this.setState({
			searchTerm: e.target.value
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();

		let url = URL + '?' + $.param({
		  'api-key': "f98593a095b44546bf4073744b540da0",
		  'query': this.state.searchTerm
		});

		fetch(url)
			.then(response => response.json())
			.then(json => {
				let id = 0;
				json.results.forEach(review =>{
					review["id"] = id;
					id++;
				})
				this.setState({
					reviews: json.results
				})
			  })
	}

	render(){
		return(
			<div style={{marign: 10, border: "1px solid red"}}
				 className="searchable-movie-reviews">
				<h1>SearchableMovieReviewsContainer</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Search:
						<input type="text" onChange={this.handleChange}/>
					</label>
					<input type="submit" value="Search Reviews"/>
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}
export default SearchableMovieReviewsContainer;