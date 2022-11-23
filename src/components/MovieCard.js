import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, getMovie }) => {
  const { img = "", title = "", discription = "", rating = 0 } = movie;
  const navigate = useNavigate();
  return (
    <div
      className="movie-card"
      onClick={() => {
        getMovie(movie);
        navigate("/movie");
      }}
    >
      <img src={img} alt="imagephoto" />
      <p>{title}</p>
      <p>{discription}</p>
      <p>{rating}</p>
    </div>
  );
};

export default MovieCard;
