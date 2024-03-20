import React from "react";

const MovieCard = ({ movie: { id, title, release_date, overview, poster_path } }) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w342/'

	return (
		<div className="movie" id={id}>
			<div>
				<p>{release_date ? release_date : overview}</p>
			</div>
			<div>
				<img
					src={poster_path ? `${imageUrl}${poster_path}` : "https://placehold.co/400"}
					alt="Movie Poster"
				></img>
			</div>
			<div>
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
