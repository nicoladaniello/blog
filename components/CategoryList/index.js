import React from "react";
import Category from "../Category";

const CategoryList = ({ categories, ...rest }) => {
  if (!categories || !categories.nodes.length)
    return (
      <div className="alert alert-info small">
        There are no categories at the moment
      </div>
    );

  return categories.nodes.map(cat => <Category key={cat.id} category={cat} />);
};

export default CategoryList;
