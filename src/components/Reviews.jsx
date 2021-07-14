import React from "react";
import { useState, useEffect, useContext } from "react";
import { fetchAllReviews } from "../utils/apiUtils";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchAllReviews().then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <ul>
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

export default Reviews;
