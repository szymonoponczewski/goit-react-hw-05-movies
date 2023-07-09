import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import { Suspense, useEffect, useState } from "react";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const link = location.state?.from ?? "/";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const moviePosterPath = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

  const userScore = movieDetails.vote_average * 10;

  return (
    <>
      <Link to={link}>
        <button className={css.goBackButton}>← Go back</button>
      </Link>
      <div className={css.movieDetailsContainer}>
        <img src={moviePosterPath} alt={movieDetails.title} width={250} />
        <div className={css.movieInfo}>
          <h2>{movieDetails.title}</h2>
          <p>User score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <div className={css.genresContainer}>
            {genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>Additional information</p>
        <ul className={css.additionalInfoList}>
          <li>
            <Link
              to={{ pathname: "cast", state: { from: link } }}
              className={css.additionalInfoLink}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{ pathname: "reviews", state: { from: link } }}
              className={css.additionalInfoLink}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense
        fallback={
          <div className={css.loadingMessage}>Page loading. Please wait...</div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
