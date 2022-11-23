import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, inputSearch, getMovie }) => {
  return (
    <div className="movie-list">
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().indexOf(inputSearch.toLowerCase()) >= 0 ||
            movie.rating === +inputSearch
        )
        .map((movie) => (
          <MovieCard movie={movie} getMovie={getMovie} />
        ))}
    </div>
  );
};

export default MovieList;
