import React from "react";
import classnames from "classnames";
import Link from "next/link";

const CategoryBadge = ({ data: { name, slug }, className, ...rest }) => {
  return (
    <Link href="/categories/[slug]" as={`/categories/${slug}`}>
      <a className={classnames("badge badge-warning", className)} {...rest}>
        {name}
      </a>
    </Link>
  );
};

export default CategoryBadge;
