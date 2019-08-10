import React from "react";
import Card from "../common/Card";
import CardText from "../common/Card/CardText";
import Link from "next/link";
import Image from "../Image";
import CardTitle from "../common/Card/CardTitle";

const Category = ({
  category: { name, slug, description, featuredImage } = {}
}) => {
  return (
    <Card tile>
      <Image tile img={featuredImage} />
      <div className="tile-overlay">
        <div className="text-center">
          <Link
            prefetch
            passHref
            href="/categories/[slug]"
            as={`/categories/${slug}`}
          >
            <CardTitle className="stretched-link">{name}</CardTitle>
          </Link>
          <CardText>{description}</CardText>
        </div>
      </div>
    </Card>
  );
};

export default Category;
