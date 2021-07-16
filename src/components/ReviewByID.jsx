import React from "react";
import { useState, useEffect, useContext } from "react";
import { fetchReview, fetchComments } from "../utils/apiUtils";
import { useParams } from "react-router";
import Expand from "./Expand";
import moment from "moment";

moment.locale("en-gb");

const ReviewByID = () => {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const { reviewID } = useParams();

  useEffect(() => {
    fetchReview(reviewID).then((reviewFromApi) => {
      setReview(reviewFromApi);
    });
  }, []);

  useEffect(() => {
    fetchComments(reviewID).then((commentsFromApi) => {
      console.log(commentsFromApi);
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <section className="SingleReview">
      <h2>{review.title}</h2>
      <p>Review by: {review.owner}</p>
      <img src={review.review_img_url} alt={review.owner}></img>
      <Expand>
        <h1>Comments</h1>
        <ul className="SingleReview__commentList">
          {comments.map(({ author, body, comment_id, created_at, votes }) => {
            return (
              <li key={comment_id}>
                <h2>
                  {author} posted on {moment(created_at).format("d MMMM YYYY")}{" "}
                  at {moment(created_at).format("HH:mm")}
                </h2>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </Expand>
    </section>
  );
};

export default ReviewByID;
