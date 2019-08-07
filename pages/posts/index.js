import React from "react";
import { compose, withProps } from "recompose";
import withPosts from "../../containers/withPosts";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import withPage from "../../containers/withPage";
import NotFound from "../../components/NotFound";

const Posts = ({ pageData: { pageBy }, postsData: { posts } }) => {
  if (!posts) return <NotFound />;
  if (!pageBy) pageBy = { title: "Posts" };

  return (
    <Layout page={pageBy}>
      <PostList posts={posts} />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { uri: "posts" } })),
  withPage,
  withPosts
)(Posts);
