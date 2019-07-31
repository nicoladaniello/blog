import React from "react";
import classnames from "classnames";

const CardText = ({ className, children, ...rest }) => {
  return (
    <p className={classnames("card-text", className)} {...rest}>
      {children}
    </p>
  );
};

export default CardText;
