import React from "react";
import classnames from "classnames";

const Card = ({ transparent, className, children, ...rest }) => {
  return (
    <div
      {...rest}
      className={classnames(
        "card mb-4",
        { "card-transparent": transparent },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
