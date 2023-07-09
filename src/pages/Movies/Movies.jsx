import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const movies = await searchMovies(query);
        setMoviesList(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoviesList();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newQuery = form.elements.query.value;
    setSearchParams({ query: newQuery });
    form.reset();
  };

  return (
    <>
      <MovieSearch onSubmit={handleSubmit} />
      <MovieList movies={moviesList} navigate="" />
    </>
  );
};

export default Movies;
