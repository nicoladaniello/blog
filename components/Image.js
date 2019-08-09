import React from "react";
import classnames from "classnames";
import LazyLoad from "react-lazy-load";

const Image = ({ img, avatar, thumbnail, className, ...rest }) => {
  const { srcSet, sizes, sourceUrl, altText } = img;
  const lqipSet = sourceUrl
    ? sourceUrl.replace(".jpg", ".jpg?lqip-colors")
    : [];
  const webpSet = srcSet
    ? srcSet.replace(/.jpg/gi, ".jpg?webp")
    : sourceUrl
    ? sourceUrl.replace(/.jpg/gi, ".jpg?webp")
    : null;

  return (
    <div
      className={classnames({ "img-container": thumbnail })}
      style={{ backgroundColor: `url('${lqipSet[0]}')` }}
    >
      {img && (
        <LazyLoad offsetVertical={300}>
          <picture>
            {webpSet && <source srcSet={webpSet} type="image/webp" />}
            <source srcSet={srcSet} type="image/jpeg" />
            <img
              className={classnames("img-fluid", { avatar }, className)}
              src={sourceUrl}
              srcSet={srcSet}
              sizes={sizes}
              alt={altText}
              {...rest}
            />
          </picture>
        </LazyLoad>
      )}
    </div>
  );
};

export default Image;
