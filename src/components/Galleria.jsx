import React, { useState } from 'react';

const API_KEY = '215842aa'; 

function Galleria({ searchTitle, galleryTitle }) {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchMovies = () => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Star Wars`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
          setLoaded(true);
        }
      })
      .catch((err) => {
        console.error('Errore nel caricamento dei film:', err);
      });
  };

  if (!loaded) {
    fetchMovies();
  }

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center gap-2">
        <h4 className="text-white text-start p-1">{galleryTitle}Tv Show</h4>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle border rounded-0 border-light m-1 text-light bg-black"
            type="button"
            id="genreDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <ul className="dropdown-menu" aria-labelledby="genreDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Fantasy</a></li>
            <li><a className="dropdown-item" href="#">Adventure</a></li>
          </ul>
        </div>
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

export default Galleria;
