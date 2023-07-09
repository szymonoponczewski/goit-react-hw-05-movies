import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(id);
        setReviews(reviewsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <ul className={css.reviewsList}>
      {reviews.length === 0 ? (
        <li className={css.reviewsListItem}>
          There are no reviews availible for this movie.
        </li>
      ) : (
        reviews.map((review) => (
          <li key={review.id} className={css.reviewsListItem}>
            <p className={css.reviewsListItemAuthor}>Author: {review.author}</p>
            <p className={css.reviewsListItemContent}>{review.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
