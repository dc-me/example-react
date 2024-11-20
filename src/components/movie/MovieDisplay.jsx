export default function MovieDisplay({ movie }) {
  const loaded = () => (
    <>
      <h1 className="mb-2 mt-3 text-center text-lg font-bold">{movie.Title}</h1>
      <div className="flex px-8">
        <h2>{movie.Genre}</h2>
        <h2 className="ml-auto">{movie.Year}</h2>
      </div>
      <img className="mt-4 w-full" src={movie.Poster} alt={movie.Title} />
    </>
  );

  const loading = () => <h2>No Movie to Display</h2>;

  return movie ? loaded() : loading();
}
