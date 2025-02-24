import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api.tsx";
import "../styles/Home.css";

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>();
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (!searchInput?.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchInput);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }
  };
  const handleInput = (e: any) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        console.log("popularMovies", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        setError("failed to load movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <div className='Home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for Movies'
          className='search-input'
          onChange={(e) => handleInput(e)}
          value={searchInput}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      {error && <div className='error-message'>{error}</div>}
      {loading ? (
        <div className='loading'>Loading..</div>
      ) : (
        <div className='movies-grid'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
