// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews =(props) => {
	return(
		<ul className="review-list">
			<li className="review"></li>
			<li className="review"></li>
			<li className="review"></li>
		</ul>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}
export default MovieReviews;