import React from "react";
import ErrorPlaceHolder from "../assests/Error-Placeholder.png";

function MovieCard(props) {
  const { movieObject } = props;

  return (
    <div className="movie-card" key={movieObject.imdbID}>
      <div className="movie-year">
        <p>{movieObject.Year}</p>
      </div>
      <div>
        <img
          src={
            movieObject.Poster !== "N/A" ? movieObject.Poster : ErrorPlaceHolder
          }
          alt={movieObject.Title}
        />
      </div>
      <div>
        <span className="movie-type">{movieObject.Type}</span>
        <h3 className="movie-title">{movieObject.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
