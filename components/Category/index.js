import React from "react";
import Card from "../common/Card";
import CardText from "../common/Card/CardText";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <Card
      className="d-inline-block mx-2 bg-dark text-white border-0"
      style={{ height: "200px", width: "200px" }}
    >
      {category.featuredImageUrl && (
        <div
          className="d-flex w-100 h-100 bg-cover"
          style={{
            backgroundImage: `url('${category.featuredImageUrl}')`
          }}
        />
      )}
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <div className="text-center">
          <Link href="/categories/[slug]" as={`/categories/${category.slug}`}>
            <a className="card-title text-light stretched-link">
              {category.name}
            </a>
          </Link>
          <CardText>{category.description}</CardText>
        </div>
      </div>
    </Card>
  );
};

export default Category;
