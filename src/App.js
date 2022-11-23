import "./App.css";
import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([
    {
      img: "https://i.ytimg.com/vi/Udfq0fiScug/movieposter_en.jpg",
      title: "catch me if you can",
      discription: "bad movie",
      rating: 3,
    },
    {
      img: "https://i.ytimg.com/vi/Udfq0fiScug/movieposter_en.jpg",
      title: "shutter Island",
      discription: "good movie",
      rating: 4.5,
    },
    {
      img: "https://i.ytimg.com/vi/Udfq0fiScug/movieposter_en.jpg",
      title: "shutter Island",
      discription: "good movie",
      rating: 5,
    },
  ]);
  const [inputSearch, setInputSearch] = useState("");
  const handleSearch = (text) => {
    setInputSearch(text);
  };
  const [show, setShow] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDiscription, setInputDiscription] = useState("");
  const [inputRating, setInputRating] = useState(0);
  const [inputPosterUrl, setInputPosterUrl] = useState("");
  const [clickedMovie, setClickedMovie] = useState({});
  const getMovie = (movie) => {
    setClickedMovie(movie);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    const newMovie = {
      img: inputPosterUrl,
      title: inputTitle,
      discription: inputDiscription,
      rating: inputRating,
    };
    setMovies([...movies, newMovie]);
    handleClose();
  };
  return (
    <div className="app-container">
      <h1>Movies</h1>
      <Button variant="primary" onClick={handleShow} className="add-button">
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-inputs">
          <input
            type="text"
            placeholder="Please type the film title"
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Please type the film discription"
            onChange={(e) => {
              setInputDiscription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Please type the film rating"
            onChange={(e) => {
              setInputRating(+e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Please enter the film Poster Url"
            onChange={(e) => {
              setInputPosterUrl(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Filter handleSearch={handleSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <MovieList
              movies={movies}
              inputSearch={inputSearch}
              getMovie={getMovie}
            />
          }
        />
        <Route
          index
          element={
            <MovieList
              movies={movies}
              inputSearch={inputSearch}
              getMovie={getMovie}
            />
          }
        />
        <Route
          path="/movie"
          element={<Movie discription={clickedMovie.discription} />}
        />
      </Routes>
    </div>
  );
}

export default App;
