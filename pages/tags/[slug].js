import React from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import withTag from "../../containers/withTag";

const Tag = ({ tagData: { tag }, router }) => {
  if (!tag) return <NotFound page={{ title: "Not Found" }} />;

  return (
    <Layout page={{ title: `tag: ${router.query.slug}` }}>
      {tagData && tagData.tag && <PostList posts={tagData.tag.posts} />}
    </Layout>
  );
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { slug: [router.query.slug] } })),
  withTag
)(Tag);
