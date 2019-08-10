import React from "react";
import classnames from "classnames";
import LazyLoad from "react-lazy-load";

const Image = ({ top, avatar, tile, img, className, ...rest }) => {
  if (!img) return null;

  const { srcSet, sizes, sourceUrl, altText } = img;
  const imgClasses = classnames(
    "img-fluid",
    {
      "card-img-top": top,
      "card-img-avatar": avatar,
      "card-img-tile": tile,
      "card-img": !top && !avatar
    },
    className
  );

  return (
    <LazyLoad offsetVertical={300}>
      <img
        className={imgClasses}
        src={sourceUrl}
        srcSet={srcSet}
        sizes={sizes}
        alt={altText}
        {...rest}
      />
    </LazyLoad>
  );
};

export default Image;
