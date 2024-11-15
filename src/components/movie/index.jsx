import { useEffect, useState } from 'react';
import MovieSearchBar from './MovieSearchBar';
import MovieDisplay from './MovieDisplay';
import { getMovie } from '../../lib/movie';
import classes from './index.module.css';

export default function Movie() {
  const [movie, setMovie] = useState(null);

  const handleSearchMovie = (t) => {
    getMovie(t).then(setMovie);
  };

  useEffect(() => {
    console.log('useEffect');
    getMovie('Clueless').then(setMovie);
  }, []);

  return (
    <>
      <MovieSearchBar onSearch={handleSearchMovie} />
      <MovieDisplay movie={movie} />
    </>
  );
}
