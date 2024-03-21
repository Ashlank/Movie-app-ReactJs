import App from "../../App";

export function generateStaticParams() {
  return [{ slug: [''] }]
}

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: process.env.NEXT_PUBLIC_API_TOKEN,
	},
};

async function getMovies(query) {
	if (query) {
		const { results } = await fetch(`${SEARCH_URL}?query=${query}`, options).then((res) => res.json());
		return results;
	} else {
		const { results } = await fetch(API_URL, options).then((res) => res.json());
		return results;
	}
}

export default async function Page({ searchParams }) {
	const { query } = searchParams
	const movies = await getMovies(query);
	return <App movies={movies} />
}
