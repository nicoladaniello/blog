import React from "react";
import { compose, withProps } from "recompose";
import nprogress from "nprogress";
import withPage from "../containers/withPage";
import withPosts from "../containers/withPosts";
import Layout from "../components/common/Layout";
import PreFooter from "../components/PreFooter";
import PostList from "../components/PostList";

const Index = ({
  pageData: { pageBy, loading: pageLoading },
  postsData: { posts, loading: dataLoading }
}) => {
  if (process.browser) {
    if (!pageLoading) nprogress.inc();
    if (!dataLoading) nprogress.inc();
    if (!pageLoading && !dataLoading) nprogress.done();
  }

  if (!pageBy) pageBy = { title: "Welcome" };

  return (
    <Layout page={pageBy}>
      <section className="mb-5">
        <PostList posts={posts} />
      </section>

      <PreFooter />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { first: 6 } })),
  withPosts,
  withProps(() => ({ variables: { uri: "np_home" } })),
  withPage
)(Index);
