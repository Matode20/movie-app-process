const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="flex flex-col gap-4 hover:cursor-pointer">
      <img src={movie.Poster} className="h-64 rounded-xl" alt="" />
      <div className="flex flex-col text-sm">
        <h2 className="font-bold">{movie.Title}</h2>
        <span className="text-xs text-slate-200">Rating | {movie.Year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
