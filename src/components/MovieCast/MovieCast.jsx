import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/api";
import css from "./MovieCast.module.css";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCast(id);
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <ul className={css.castList}>
      {cast.length === 0 ? (
        <li className={css.castListItem}>
          We don't have cast information for this movie
        </li>
      ) : (
        cast.map((el) => (
          <li key={el.id} className={css.castListItem}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              }
              width={200}
              alt={el.name}
            />
            <p className={css.castName}>{el.name}</p>
            <p className={css.castCharacter}>Character: {el.character}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
