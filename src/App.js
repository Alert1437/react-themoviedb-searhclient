import React, {useState} from 'react';
import './App.css';
import { SearchForm } from './components/SearchForm';
import { SearchResults }  from './components/SearchResults';
import {requestMovies} from "./services/API";

function App() {
    const [movies, setMovies] = useState([])
    const handleSearch = (e) => {
        let query =  e.target.value;
        if (!query) {
            return setMovies([]);
        }
        requestMovies(query).then((response) => {
            setMovies(response.results);
        });
    }

    return (
        <div className="App">
          <header className="App-header">
            <SearchForm handleSearch={handleSearch}/>
          </header>
          <section className="App-content">
            <SearchResults movies={movies} />
          </section>
        </div>
    );
}

export default App;
