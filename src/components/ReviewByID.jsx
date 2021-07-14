import React from "react";
import { useState, useEffect, useContext } from "react";
import { fetchReview } from "../utils/apiUtils";
import { useParams } from "react-router";

const ReviewByID = () => {
  const [review, setReview] = useState([]);
  const { reviewID } = useParams();
  console.log(reviewID);

  useEffect(() => {
    fetchReview(reviewID).then((reviewFromApi) => {
      console.log(reviewFromApi);
      setReview(reviewFromApi);
    });
  }, []);

  return (
    <ul>
      <li key={review.review_id}>
        <h2>{review.title}</h2>
        <p>Review by: {review.owner}</p>
        <img src={review.review_img_url} alt={review.owner}></img>
        <br></br>
        <button>View comments</button>
      </li>
    </ul>
  );
};

export default ReviewByID;
