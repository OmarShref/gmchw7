import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { img = "", title = "", discription = "", rating = 0 } = movie;
  return (
    <div className="movie-card">
      <img src={img} alt="imagephoto" />
      <p>{title}</p>
      <p>{discription}</p>
      <p>{rating}</p>
    </div>
  );
};

export default MovieCard;
