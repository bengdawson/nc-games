import React from "react";
import { useState, useEffect } from "react";
import { fetchReviewsByCat } from "../utils/apiUtils";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Categories from "./Categories";

const ReviewsByCat = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    fetchReviewsByCat(category).then((reviewsFromApi) => {
      console.log(reviewsFromApi, "REVIEWSFROMAPI");
      setReviews(reviewsFromApi);
    });
  }, [category]);

  return (
    <ul>
      <li>
        <Categories />
      </li>
      {reviews.map(
        ({
          owner,
          title,
          review_id,
          category,
          review_img_url,
          created_at,
          votes,
          comment_count,
        }) => {
          return (
            <li key={review_id}>
              <h2>{title}</h2>
              <p>Review by: {owner}</p>
              <img src={review_img_url} alt={owner}></img>
              <br></br>
              <nav>
                <Link to={`/reviews/${review_id}`}>View Review</Link>
              </nav>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ReviewsByCat;
