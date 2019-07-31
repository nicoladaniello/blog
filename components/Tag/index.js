import React from "react";
import classnames from "classnames";
import Link from "next/link";

const Tag = ({ name, slug, className, ...rest }) => {
  return (
    <Link href="/tags/[slug]" as={`/tags/${slug}`}>
      <a>
        <span
          className={classnames("badge badge-pill badge-dark", className)}
          {...rest}
        >
          {name}
        </span>
      </a>
    </Link>
  );
};

export default Tag;
