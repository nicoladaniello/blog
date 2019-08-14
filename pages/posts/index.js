import React from "react";
import { compose, withProps } from "recompose";
import nprogress from "nprogress";
import withPosts from "../../containers/withPosts";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import withPage from "../../containers/withPage";

const Posts = ({
  pageData: { pageBy, loading: pageLoading },
  postsData: { posts, loading: dataLoading }
}) => {
  if (process.browser) {
    if (!pageLoading) nprogress.inc();
    if (!dataLoading) nprogress.inc();
    if (!pageLoading && !dataLoading) nprogress.done();
  }
  if (pageLoading) return <Layout />;
  if (!pageBy) pageBy = { title: "Posts" };

  return (
    <Layout page={pageBy}>
      <PostList posts={posts} />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { uri: "np_posts" } })),
  withPage,
  withPosts
)(Posts);
