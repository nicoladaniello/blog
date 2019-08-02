import React from "react";
import { compose } from "recompose";
import withPage from "../../containers/withPage";
import withPosts from "../../containers/withPosts";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";

const Posts = ({ page, posts }) => {
  return (
    <Layout page={page}>
      <PostList data={posts} />
    </Layout>
  );
};

export default compose(
  withPage("posts"),
  withPosts()
)(Posts);
