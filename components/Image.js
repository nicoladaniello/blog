import React from "react";
import classnames from "classnames";

const Image = ({
  img: { srcSet, sizes, sourceUrl, altText },
  avatar,
  className,
  ...rest
}) => {
  return (
    <img
      className={classnames("img-fluid", { avatar }, className)}
      srcSet={srcSet}
      sizes={sizes}
      src={sourceUrl}
      alt={altText}
      {...rest}
    />
  );
};

export default Image;
