import React from "react";
import { useState, useEffect } from "react";
import { fetchCategories } from "../utils/apiUtils";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div class="dropdown">
      <button class="dropbtn">Filter reviews by category</button>
      <div class="dropdown-content">
        {categories.map((category) => {
          return (
            <a href={`/reviews/categories/${category.slug}`}>{category.slug}</a>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
