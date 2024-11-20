import { useEffect, useState } from "react";
import MovieSearchBar from "./MovieSearchBar";
import MovieDisplay from "./MovieDisplay";
import { getMovie } from "../../lib/movie";

export default function Movie() {
  const [movie, setMovie] = useState(null);

  const handleSearchMovie = (t) => {
    getMovie(t).then(setMovie);
  };

  useEffect(() => {
    getMovie("Clueless").then(setMovie);
  }, []);

  return (
    <div className="min-h-full max-w-lg p-4">
      <MovieSearchBar onSearch={handleSearchMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
