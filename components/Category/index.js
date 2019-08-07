import React from "react";
import Card from "../common/Card";
import CardText from "../common/Card/CardText";
import Link from "next/link";
import CardImage from "../common/Card/CardImage";

const Category = ({
  category: { name, slug, description, featuredImage } = {}
}) => {
  return (
    <Card className="category">
      <CardImage img={featuredImage} />
      <div className="category-overlay">
        <div className="text-center">
          <Link prefetch href="/categories/[slug]" as={`/categories/${slug}`}>
            <a className="card-title stretched-link">{name}</a>
          </Link>
          <CardText>{description}</CardText>
        </div>
      </div>
    </Card>
  );
};

export default Category;
