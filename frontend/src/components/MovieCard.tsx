import React from "react";
import "../styles/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }: any) => {
  const { favorites, isFavorite, addToFavorites, removeFromFavorites } =
    useMovieContext();

  const favorite = isFavorite(movie.id);

  const handleFavourite = (e: any) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else {
      addToFavorites(movie);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='movie-overlay'>
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={handleFavourite}
          >
            ♥
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
