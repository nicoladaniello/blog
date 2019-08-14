import React from "react";
import { compose, withProps } from "recompose";
import { withRouter } from "next/router";
import Link from "next/link";
import nprogress from "nprogress";
import Layout from "../../components/common/Layout";
import withPost from "../../containers/withPost";
import NotFound from "../../components/NotFound";

const Post = ({ postData: { postBy, loading } }) => {
  if (process.browser && !loading) nprogress.done();
  if (loading) return <Layout />;
  if (!postBy) return <NotFound />;

  const titleRendered = (
    <div>
      <h1 className="h2 font-weight-bold">{postBy.title}</h1>
      by{" "}
      <Link href="/users/[slug]" as={`/users/${postBy.author.slug}`}>
        <a>{postBy.author.name}</a>
      </Link>
    </div>
  );
  return <Layout page={{ ...postBy, titleRendered }} />;
};

export default compose(
  withRouter,
  withProps(({ router }) => ({ variables: { uri: router.query.uri } })),
  withPost
)(Post);
