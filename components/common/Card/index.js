import React from "react";
import classnames from "classnames";

const Card = ({ transparent, shadow = true, className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classnames(
        "card mb-4",
        { "card-transparent": transparent, "card-shadow": shadow },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
