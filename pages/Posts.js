import React from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const Posts = () => {
  return (
    <Layout>
      <h1>Posts</h1>
      <PostList />
    </Layout>
  );
};

export default Posts;
