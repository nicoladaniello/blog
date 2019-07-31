import React from "react";
import classnames from "classnames";

const CardBody = ({ className, children }) => {
  return <div className={classnames("card-body", className)}>{children}</div>;
};

export default CardBody;
