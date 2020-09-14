import React from 'react';
import './MovieItem.css';

export function MovieItem({id, title, poster_path}) {
    const posterUrl = "https://image.tmdb.org/t/p/w220_and_h330_face" + poster_path;
    const movieUrl = "https://www.themoviedb.org/movie/" + id;
    return (
        <div className="MovieItem">
            <a href={movieUrl} className="MovieItem-link" target="_blank" rel="noopener noreferrer">
                <img src={posterUrl} alt={title}/>
            </a>
        </div>
    );
}
