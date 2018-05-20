import React from 'react';
// Code MovieReviews Here

/*
	props={
		reviews: [
			id: ""
			byline: "",
			display_title:"",
			headline: "",
			publication_date:"",
			summary_short: 
			...
		]
	}
*/


const MovieReviews = (props) =>{
	return(
		<div style={{margin: 10, border: "1px solid green"}}
		 	 className="review-list">
			<h2>MovieReviews</h2>
			{props.reviews.map(review=> {
				let {id, byline, display_title, headline, publication_date, summary_short} = review;
				return(
					<div className="review" key={id}>
						<ul>						
							<li><b>Title:</b> {display_title}</li>
							<li><b>By:</b> {byline}</li>
							<li><b>Headline:</b> {headline}</li>
							<li><b>Date:</b>{publication_date}</li>
							<li>{summary_short}</li>
						</ul>

					</div>
				)
			})}
		</div>
	)
}
MovieReviews.defaultProps = {
	reviews:[]
}

export default MovieReviews;