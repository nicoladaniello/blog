import React from "react";
import Layout from "./common/Layout";

const defaultPage = {
  title: "Ops!"
};

const NotFound = ({
  message = "We couldn't find what you were looking for",
  page = defaultPage
}) => {
  return (
    <Layout page={page}>
      <div className="alert alert-warning">{message}</div>
    </Layout>
  );
};

export default NotFound;
