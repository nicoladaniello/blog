import React from "react";
import Card from "../common/Card";
import CardText from "../common/Card/CardText";
import Image from "../Image";
import CardTitle from "../common/Card/CardTitle";

const Category = ({ category: { name, slug, customFields } = {} }) => {
  return (
    <Card tile>
      <Image tile img={customFields.featuredImage} />
      <div className="tile-overlay">
        <div className="text-center">
          <CardTitle
            href="/categories/[slug]"
            as={`/categories/${slug}`}
            stretched
          >
            {name}
          </CardTitle>
        </div>
      </div>
    </Card>
  );
};

export default Category;
