import React from "react";
import Category from "../Category";

const CategoryList = ({ categories }) => {
  return categories && categories.nodes.length ? (
    <div className="category-list">
      {categories.nodes.map(cat => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  ) : (
    ""
  );
};

export default CategoryList;
