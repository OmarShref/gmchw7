import { useNavigate } from "react-router-dom";

const Movie = ({ discription }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>{discription}</h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};
export default Movie;
