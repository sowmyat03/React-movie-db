import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext({});
export const useMovieContext: any = () => useContext(MovieContext);

export const MovieProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    console.log("storedFavs", storedFavs);
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    console.log("here local");
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: any) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieID: any) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavorite = (movieID: any) => {
    return favorites.some((movie) => movie.id === movieID);
  };

  return (
    <MovieContext.Provider
      value={{ isFavorite, favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </MovieContext.Provider>
  );
};
