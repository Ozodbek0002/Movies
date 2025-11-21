import "../css/Favorites.css";
import { useMovieContext } from "../components/context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorities() {
  const { favorites } = useMovieContext();


  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorities-empty">
      <h2>Your Favorites list is empty...</h2>
      <p>Add items to your favorites to see them here....</p>
    </div>
  );
}

export default Favorities;
