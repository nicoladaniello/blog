import React from "react";
import classnames from "classnames";
import Link from "next/link";

const Category = ({ data: { name, slug }, className, ...rest }) => {
  return (
    <Link href="/categories/[slug]" as={`/categories/${slug}`}>
      <a>
        <span
          className={classnames("badge badge-primary", className)}
          {...rest}
        >
          {name}
        </span>
      </a>
    </Link>
  );
};

export default Category;
