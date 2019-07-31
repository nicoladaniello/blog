import React from "react";
import classnames from "classnames";

const CardHorizontal = ({
  renderLeft,
  renderRight,
  inverted,
  className,
  ...rest
}) => {
  return (
    <div className={classnames("row align-items-center", className)} {...rest}>
      <div className="col-md-6">{renderLeft}</div>
      <div className={classnames("col-md-6", { "order-1": inverted })}>
        {renderRight}
      </div>
    </div>
  );
};

export default CardHorizontal;
