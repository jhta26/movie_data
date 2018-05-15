import React from 'react'

const MovieSearchResultsComponent = ({movies}) =>{
	return(
		<div>
		{movies.map(movie=><MovieSearchResultComponent info={movie}/>)}
		</div>
		)
}