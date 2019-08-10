import React from "react";
import classnames from "classnames";

const CardTitle = ({ className, children, ...rest }) => {
  return (
    <a className={classnames("card-title", className)} {...rest}>
      {children}
    </a>
  );
};

export default CardTitle;
