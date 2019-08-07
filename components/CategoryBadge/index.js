import React from "react";
import classnames from "classnames";
import Link from "next/link";

const CategoryBadge = ({ data, className, ...rest }) => {
  return (
    data && (
      <Link prefetch href="/categories/[slug]" as={`/categories/${data.slug}`}>
        <a className={classnames("badge badge-warning", className)} {...rest}>
          {data.name}
        </a>
      </Link>
    )
  );
};

export default CategoryBadge;
