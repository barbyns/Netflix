import React, { useState } from 'react';

const API_KEY = '215842aa';

function HarrySpotter() {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    setLoaded(true); 
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Harry Potter`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((err) => {
        console.error('Errore nel caricamento dei film:', err);
      });
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center gap-2">
        <h4 className="text-white text-start p-1">Harry Potter - Watch Again</h4>
      </div>

      <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ height: '200px', borderRadius: '4px' }}
            />
            <p className="text-light" style={{ fontSize: '0.9rem' }}>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HarrySpotter;
