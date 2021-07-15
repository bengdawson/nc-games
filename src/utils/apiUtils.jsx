import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-13.herokuapp.com/api",
});

export const fetchAllReviews = () => {
  return myApi.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const fetchReview = (reviewID) => {
  return myApi.get(`/reviews/${reviewID}`).then((response) => {
    return response.data.reviews;
  });
};

export const fetchComments = (reviewID) => {
  return myApi.get(`/reviews/${reviewID}/comments`).then((response) => {
    return response.data.comments;
  });
};
