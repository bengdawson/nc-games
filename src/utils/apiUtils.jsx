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

export const fetchCategories = () => {
  return myApi.get("/categories").then((response) => {
    return response.data.categories;
  });
};

export const fetchReviewsByCat = (category) => {
  console.log(category);
  return myApi.get(`/reviews?category=${category}`).then((response) => {
    console.log(response, "FETCHBYCAT");
    return response.data.reviews;
  });
};
