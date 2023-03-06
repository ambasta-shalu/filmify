import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import ErrorCapture from "../components/ErrorCapture";

function MovieContainer(props) {
  const { films, searchFilms } = props;

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
