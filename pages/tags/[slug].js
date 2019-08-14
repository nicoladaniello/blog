import React from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import nprogress from "nprogress";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import withTag from "../../containers/withTag";
import NotFound from "../../components/NotFound";

const Tag = ({ tagData: { tag, loading }, router }) => {
  if (process.browser && !loading) nprogress.done();
  if (loading) return <Layout />;
  if (!tag) return <NotFound />;

  return (
    <Layout page={{ title: `tag: ${router.query.slug}` }}>
      {tag && <PostList posts={tag.posts} />}
    </Layout>
  );
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { slug: [router.query.slug] } })),
  withTag
)(Tag);
