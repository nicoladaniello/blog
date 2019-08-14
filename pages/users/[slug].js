import React from "react";
import { withRouter } from "next/router";
import nprogress from "nprogress";
import Layout from "../../components/common/Layout";
import { compose } from "recompose";
import withUser from "../../containers/withUser";
import Image from "../../components/Image";
import PostList from "../../components/PostList";
import NotFound from "../../components/NotFound";

const User = ({ userData: { user, loading } }) => {
  if (process.browser && !loading) nprogress.done();
  if (loading) return <Layout />;
  if (!user) return <NotFound />;

  const page = user.avatar
    ? {
        titleRendered: (
          <div className="media">
            <Image
              avatar
              img={{ sourceUrl: user.avatar.url }}
              className="mr-3"
            />
            <div className="media-body">
              <span className="badge badge-light">Author</span>
              <h1 className="h2 font-weight-bold">{user.name}</h1>
            </div>
          </div>
        )
      }
    : { title: user.name };

  return (
    <Layout title={`Author: ${user.name}`} page={page}>
      <PostList posts={user.posts} />
    </Layout>
  );
};

export default compose(
  withRouter,
  withUser
)(User);
