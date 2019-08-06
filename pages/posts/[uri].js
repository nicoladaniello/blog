import React from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import Layout from "../../components/common/Layout";
import withPost from "../../containers/withPost";
import NotFound from "../../components/NotFound";

const Post = ({ postData: { postBy } }) => {
  if (!postBy) return <NotFound />;
  return <Layout page={postBy} />;
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { uri: router.query.uri } })),
  withPost
)(Post);
