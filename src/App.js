import React from "react";
import { useState, useEffect } from "react";

import "./css/app.css";
import SearchIcon from "./resources/search.svg";

import MovieCard from "./components/MovieCard";

const API_TOKEN = process.env.API_TOKEN

const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: API_TOKEN,
	},
};

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async (title) => {
		if (title) {
			const response = await fetch(`${SEARCH_URL}?query=${title}`, options);
			const { results } = await response.json();
			setMovies(results);
            console.log(results)
		} else {
			const response = await fetch(`${API_URL}`, options);
			const { results } = await response.json();
			setMovies(results);
		}
	};

    const handleSubmit = (e) => {
        e.preventDefault()
        searchMovies(searchTerm)
    }

	useEffect(() => {
		searchMovies();
	}, []);

	return (
		<>
			<div className="container app">
				<h1>Movie App</h1>
				<div className="search container">
					<form onSubmit={handleSubmit}>
						<input
							placeholder="Buscar película"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						<button type="button">
							<img src={SearchIcon} alt="search icon" />
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
