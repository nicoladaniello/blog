import React from "react";
import Category from "../Category";

const CategoryList = ({ categories }) => {
  if (!categories || !categories.length)
    return (
      <div {...rest}>
        <div className="alert alert-info">Nothing to show yet!</div>
      </div>
    );

  return categories.map(cat => <Category key={cat.id} category={cat} />);
};

export default CategoryList;
