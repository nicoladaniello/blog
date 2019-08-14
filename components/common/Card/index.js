import React from "react";
import classnames from "classnames";

const Card = ({ post, tile, className, children, ...rest }) => {
  return (
    <div className={classnames("card", { post, tile }, className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
