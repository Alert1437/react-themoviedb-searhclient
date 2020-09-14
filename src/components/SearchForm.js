import React from 'react';
import './SearchForm.css';

export function SearchForm({handleSearch}) {
    return (
        <div className="SearchForm">
            <input type="text" placeholder="Search..." className="SearchForm-control" onKeyUp={handleSearch}
                   onChange={handleSearch}/>
        </div>
    );
}
