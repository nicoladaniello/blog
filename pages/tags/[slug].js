import React from "react";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import withTag from "../../containers/withTag";
import ErrorMessage from "../../components/ErrorMessage";

const Tag = ({ tag, router }) => {
  return (
    <Layout page={{ title: `tag: ${router.query.slug}` }}>
      {tag ? (
        <PostList posts={tag.posts} />
      ) : (
        <ErrorMessage message="Tag not found" />
      )}
    </Layout>
  );
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { slug: [router.query.slug] } })),
  withTag
)(Tag);
