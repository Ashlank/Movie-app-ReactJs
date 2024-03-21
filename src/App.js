'use client'
import Image from "next/image";
import Link from "next/link";

import SearchIcon from "./resources/search.svg";
import MovieCard from "./components/MovieCard";

const App = ({ movies }) => {

	const handleSubmit = (e) => {
		e.preventDefault()
		window.location.search = `query=${e.target[0].value}`
	}

	return (
		<>
			<div className="container app">
				<Link href='/'>
					<h1>Movie App</h1>
				</Link>
				<div className="search container">
					<form onSubmit={handleSubmit}>
						<input
							placeholder="Buscar película"
						/>
						<button type="submit">
							<Image src={SearchIcon} alt="search icon" />
						</button>
					</form>
				</div>
				<div className="container movies">
					{movies?.length > 0 ? (
						movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
					) : (
						<div>
							<p>No se encontraron peliculas!</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
