import React from "react";

const MovieCard = ({ movie: { id, title, year, description, image } }) => {

    return (
        <div className="movie" id={id}>
            <div> 
                <p>{year ? year : description}</p>
            </div>
            <div>
                <img src={image !== null ? image : 'https://via.placeholder.com/400'} alt="Movie Poster"></img>
            </div>
            <div>
                <h3>{title}</h3>
            </div>

        </div>
    );
}

export default MovieCard;