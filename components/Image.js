import React from "react";
import classnames from "classnames";
import LazyLoad from "react-lazy-load";

const Image = ({
  img: { srcSet, sizes, sourceUrl, altText } = {},
  avatar,
  thumbnail,
  className,
  ...rest
}) => {
  return (
    <div class={classnames({ "img-container": thumbnail })}>
      <LazyLoad offsetVertical={300}>
        <img
          className={classnames("img-fluid", { avatar }, className)}
          src={sourceUrl}
          srcSet={srcSet}
          sizes={sizes}
          alt={altText}
          {...rest}
        />
      </LazyLoad>
    </div>
  );
};

export default Image;
