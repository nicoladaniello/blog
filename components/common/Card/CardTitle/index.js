import React from "react";
import Link from "next/link";
import classnames from "classnames";

const CardTitle = ({ href, as, stretched, className, children, ...rest }) => {
  return href ? (
    <Link href={href} as={as} prefetch>
      <a
        className={classnames(
          "card-title",
          { "stretched-link": stretched },
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </Link>
  ) : (
    <h5
      className={classnames(
        "card-title",
        { "stretched-link": stretched },
        className
      )}
      {...rest}
    >
      {children}
    </h5>
  );
};

export default CardTitle;
