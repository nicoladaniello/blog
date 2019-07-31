import React from "react";
import classnames from "classnames";

const CardTitle = ({ className, children, ...rest }) => {
  return (
    <h5 className={classnames("card-title", className)} {...rest}>
      <a>{children}</a>
    </h5>
  );
};

export default CardTitle;
