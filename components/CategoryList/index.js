import React from "react";
import Category from "../Category";

const CategoryList = ({ categories }) => {
  if (!categories || !categories.nodes.length)
    return (
      <div {...rest}>
        <div className="alert alert-info small">
          There are no categories at the moment
        </div>
      </div>
    );

  return (
    <div className="card-listing">
      {categories.nodes.map(cat => (
        <Category key={cat.id} category={cat} />
      ))}
    </div>
  );
};

export default CategoryList;
