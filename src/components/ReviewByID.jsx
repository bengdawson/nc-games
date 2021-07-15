import React from "react";
import { useState, useEffect, useContext } from "react";
import { fetchReview, fetchComments } from "../utils/apiUtils";
import { useParams } from "react-router";
import Expand from "./Expand";
import moment from "moment";

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
        <p>Hello</p>
        <ul classname="SingleReview__commentList">
          {comments.map(({ author, body, comment_id, created_at, votes }) => {
            return (
              <li key={comment_id}>
                <h2>
                  {author} posted at {created_at}
                  {console.log(moment(created_at))}
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
