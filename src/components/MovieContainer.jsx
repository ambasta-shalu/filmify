import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ErrorCapture from "../components/ErrorCapture";

const API_KEY = "25be1a64";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

function MovieContainer() {
  const [films, setFilms] = useState([]);

  const searchFilms = async function (title) {
    const response = await fetch(`${BASE_URL}&s=${title}`);
    const data = await response.json();
    setFilms(data.Search);
  };

  useEffect(() => {
    searchFilms("Avenger");
  }, []);

  return (
    <div>
      {films.length > 0 ? (
        <div className="movie-container">
          {films.map((it) => (
            <MovieCard movieObject={it} />
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <ErrorCapture />
        </div>
      )}
    </div>
  );
}

export default MovieContainer;
