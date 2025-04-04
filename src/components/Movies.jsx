import React from 'react';
import Movies from './Galleria';
import Again from './Again'

function Movies() {
  return (
    <div>
      <Movies searchTitle="Harry Potter" galleryTitle="Harry Potter Saga" />
      <Movies searchTitle="Lord of the Rings" galleryTitle="The Lord of the Rings Saga" />
      <Movies searchTitle="Star Wars" galleryTitle="Star Wars Saga" />
    </div>
    
  );
}

export default Movies;
