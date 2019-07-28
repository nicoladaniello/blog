import classnames from "classnames";

const Image = ({
  img: { srcSet, sizes, sourceUrl, altText },
  className,
  ...rest
}) => {
  return (
    <img
      className={classnames("img-fluid", className)}
      srcSet={srcSet}
      sizes={sizes}
      src={sourceUrl}
      alt={altText}
      {...rest}
    />
  );
};

export default Image;
