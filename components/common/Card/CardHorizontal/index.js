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
      <div className="col-lg-6">{renderLeft}</div>
      <div className={classnames("col-lg-6", { "order-1": inverted })}>
        {renderRight}
      </div>
    </div>
  );
};

export default CardHorizontal;
