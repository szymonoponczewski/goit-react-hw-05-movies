import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ movies, navigate }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`${navigate}${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  navigate: PropTypes.string.isRequired,
};

export default MovieList;
