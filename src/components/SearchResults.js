import React from 'react';
import './SearchResults.css';
import {MovieItem} from "./MovieItem";

export function SearchResults({movies}) {
    return (
        <div className="SearchResults">
            <ul className="SearchResults__list">
                {movies.map((movie) => <li key={movie.id} className="SearchResults__item"><MovieItem {...movie}/></li>)}
            </ul>
        </div>
    );
}
