import React from 'react';
import { useState, useEffect } from 'react';

import './css/app.css';
import SearchIcon from './resources/search.svg';

import MovieCard from './components/MovieCard';

const API_KEY = process.env.API_KEY;

const API_URL = `https://imdb-api.com/API/Search/${API_KEY}/`;
const API_URL_TOP = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}/`;

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        if(title){
            const response = await fetch(`${API_URL}${title}`);
            const data = await response.json();
            setMovies(data.results);
            console.log(data.results);
        } else{
            const response = await fetch(`${API_URL_TOP}`);
            const data = await response.json();
            data.items.map( (item) => {
                return item.image = item.image.split('V1', 1) + '.jpg';
            })

            setMovies(data.items);
            console.log(data.items);
        }
    }


    useEffect(() => {
        searchMovies();
    }, []);


    return(
        <>  
            <div className='container app'>
                <h1>Movie App</h1>
                <div className='search container'>
                    <input 
                        placeholder='Buscar película' 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <img 
                        src={SearchIcon}
                        alt='search icon'
                        onClick={() => searchMovies(searchTerm)}
                    />
                </div>
                <div className='container movies'>
                    {   
                        movies?.length > 0                             
                            ? (    
                                movies.map( (movie) => (
                                    <MovieCard movie={ movie } key={movie.id}/>
                                ))
                            ) : (
                                <div>
                                    <p>No se encontraron peliculas!</p>
                                </div>
                            )
                    }
                </div>

            </div>
        </>
    );
};

export default App;