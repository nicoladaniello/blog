import React, { Fragment } from "react";
import { withRouter } from "next/router";
import Layout from "../../components/common/Layout";
import { compose } from "recompose";
import withUser from "../../containers/withUser";
import ErrorMessage from "../../components/ErrorMessage";
import Image from "../../components/Image";
import PostList from "../../components/PostList";

const User = ({ user }) => {
  if (!user)
    return (
      <Layout>
        <ErrorMessage message="User not found" />
      </Layout>
    );

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
