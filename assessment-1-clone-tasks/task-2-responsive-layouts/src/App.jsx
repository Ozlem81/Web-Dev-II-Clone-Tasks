
import React from 'react';
import {movies} from './movies.js';

function MovieCard({movie}) {
  return <article className="movie-card">
    <img src={`/assets/${movie.image}`} alt={`${movie.title} poster`} />
    <div className="movie-copy">
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description || 'Add the supplied movie description here.'}</p>
      <button type="button" onClick={() => alert(`Selected: ${movie.title}`)}>Watch now</button>
    </div>
  </article>;
}

export default function App() {
  return <>
    <header className="site-header">
      <h1>watch.it</h1>
      <nav aria-label="Main navigation"><a href="#movies">Movies</a><a href="#movies">TV Shows</a></nav>
      <button type="button" onClick={() => alert('Search interface not yet implemented')}>Search</button>
    </header>
    <main id="movies" className="movie-list" aria-label="Movies">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </main>
  </>;
}
