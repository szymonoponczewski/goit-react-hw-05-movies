import PropTypes from "prop-types";
import css from "./MovieSearch.module.css";

const MovieSearch = ({ onSubmit }) => (
  <form className={css.movieSearchForm} onSubmit={onSubmit}>
    <input className={css.movieSearchInput} type="text" name="query" required />
    <button className={css.movieSearchButton} type="submit">
      Search
    </button>
  </form>
);

MovieSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieSearch;
