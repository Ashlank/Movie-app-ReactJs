import Image from "next/image";

const MovieCard = ({ movie: { id, title, release_date, overview, poster_path } }) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w342/'

	return (
		<div className="movie" id={id}>
			<div>
				<p>{release_date ? release_date : overview}</p>
			</div>
			<div>
				<Image
					src={poster_path ? `${imageUrl}${poster_path}` : "https://fakeimg.pl/300x400"}
					alt="Movie Poster"
					width={300}
					height={300}
					priority={true}
				/>
			</div>
			<div>
				<h3>{title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
