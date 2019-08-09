import React from "react";

const ImageContainer = ({ palceholder, children, ...rest }) => {
  const style =
    palceholder && palceholder.sourceUrl
      ? {
          backgroundImage: `url('${palceholder.sourceUrl.replace(
            ".jpg",
            ".jpg?lqip-colors"
          )}')`
        }
      : null;

  return (
    <div className="img-container" style={style} {...rest}>
      {children}
    </div>
  );
};

export default ImageContainer;
