import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import css from "./Trending.module.css";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={css.trending}>
      <h2>Trending today</h2>
      <MovieList movies={movies} navigate="movies/" />
    </div>
  );
};

export default Trending;
