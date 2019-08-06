import React from "react";
import classnames from "classnames";
import Link from "next/link";

const Tag = ({ tag: { name, slug } = {}, className, ...rest }) => {
  return (
    <Link prefetch href="/tags/[slug]" as={`/tags/${slug}`}>
      <a className={classnames("badge badge-light mx-1", className)} {...rest}>
        {name}
      </a>
    </Link>
  );
};

export default Tag;
