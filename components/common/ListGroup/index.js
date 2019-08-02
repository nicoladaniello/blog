import React, { Fragment } from "react";
import classnames from "classnames";

const ListGroup = ({ items, itemComponent, children, className, ...rest }) => {
  return (
    <div className={classnames("list-group", className)} {...rest}>
      {items &&
        items.map((item, idx) => (
          <Fragment key={idx}>
            {children({
              item,
              className: "list-group-item list-group-item-action"
            })}
          </Fragment>
        ))}
    </div>
  );
};

export default ListGroup;
