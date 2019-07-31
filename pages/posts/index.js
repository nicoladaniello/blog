import React from "react";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";

const Posts = ({ layoutProps }) => {
  return (
    <Layout {...layoutProps}>
      <PostList />
    </Layout>
  );
};

export default Posts;
