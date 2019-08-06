import React, { useState } from "react";
import { compose, withProps } from "recompose";
import withPosts from "../../containers/withPosts";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import ListView from "../../components/ListView";
import withPage from "../../containers/withPage";
import NotFound from "../../components/NotFound";

const Posts = ({ pageData: { pageBy }, postsData: { posts } }) => {
  if (!posts) return <NotFound />;
  if (!pageBy) pageBy = { title: "Posts" };

  let [view, setView] = useState();
  return (
    <Layout page={pageBy}>
      <ListView selected={view} select={opt => setView((view = opt))} />
      <PostList posts={postsData.posts} />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { uri: "posts" } })),
  withPage,
  withPosts
)(Posts);
