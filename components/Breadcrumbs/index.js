import React from "react";
import classnames from "classnames";

const Breadcrumbs = ({ dark, className, children }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className={classnames(
          "breadcrumb bg-transparent",
          { "breadcrumb-dark": dark },
          className
        )}
      >
        {children}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
