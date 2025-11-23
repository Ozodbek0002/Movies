import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";
import '../css/Watch.css';
import { Play } from "lucide-react";
function WatchMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h1>404 NOT FOUND</h1>;
  return (
    <div className="watch_page">
      <h1 className="watch_title">{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        width={800}
        className="watch_img"
      />

      <p className="watch_desc">{movie.overview}</p>
      <Play className="play_btn" />
    </div>
  );
}

export default WatchMovie;
