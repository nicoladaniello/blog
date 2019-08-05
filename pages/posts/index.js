import React, { useState } from "react";
import { compose } from "recompose";
import withPage from "../../containers/withPage";
import withPosts from "../../containers/withPosts";
import Layout from "../../components/common/Layout";
import PostList from "../../components/PostList";
import ListView from "../../components/ListView";

const Posts = ({ page, posts }) => {
  let [view, setView] = useState();
  return (
    <Layout page={page}>
      <ListView selected={view} select={opt => setView((view = opt))} />
      <PostList posts={posts} />
    </Layout>
  );
};

export default compose(
  withPage("posts"),
  withPosts
)(Posts);
