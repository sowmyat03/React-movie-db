import React from "react";
import "../styles/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites.length > 0)
    return (
      <div>
        <h2>Your Favorites</h2>
        <div className='movies-grid'>
          {favorites.map((favorite: any) => (
            <MovieCard movie={favorite} key={favorite.id} />
          ))}
        </div>
      </div>
    );
  return (
    <div className='favorites-empty'>
      <h2>No Favorite movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
};

export default Favorites;
