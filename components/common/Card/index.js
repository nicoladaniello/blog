import React from "react";
import classnames from "classnames";

const Card = ({ tile, advert, className, children, ...rest }) => {
  return (
    <div
      className={classnames(
        { tile, advert, card: !tile && !advert },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
