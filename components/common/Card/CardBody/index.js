import React from "react";
import classnames from "classnames";

const CardBody = ({ className, children, ...rest }) => {
  return (
    <div className={classnames("card-body", className)} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
