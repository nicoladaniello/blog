import React from "react";
import Layout from "./common/Layout";

const defaultPage = {
  title: "Ops!"
};

const NotFound = ({
  message = "This resource is not available at the moment. Sorry! 😳",
  page = defaultPage
}) => {
  return (
    <Layout page={page}>
      <div className="alert alert-warning">{message}</div>
    </Layout>
  );
};

export default NotFound;
