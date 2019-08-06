import React from "react";

const BreadcrumbItem = ({ children }) => {
  return (
    <li className="breadcrumb-item" aria-current="page">
      {children}
    </li>
  );
};

export default BreadcrumbItem;
