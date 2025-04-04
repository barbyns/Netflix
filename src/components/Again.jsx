import React, { useState } from 'react';

const API_KEY = '215842aa';

let hasFetched = false; 

function Again({ galleryTitle }) {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  if (!loaded && !hasFetched) {
    hasFetched = true;
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Lord of the Rings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          setLoaded(true);
        }
      })
      .catch((err) => {
        console.error('Errore nel caricamento dei film:', err);
        setLoaded(true);
      });
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center gap-2">
        <h4 className="text-white text-start p-1">{galleryTitle}</h4>
        <div className="dropdown"></div>
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

export default Again;
