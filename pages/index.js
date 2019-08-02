import React, { useState } from "react";
import { compose } from "recompose";
import withPage from "../containers/withPage";
import withPosts from "../containers/withPosts";
import Layout from "../components/common/Layout";
import PreFooter from "../components/PreFooter";
import PostList from "../components/PostList";
import ListView from "../components/ListView";

const Index = ({ page, posts }) => {
  let [view, setView] = useState();
  return (
    <Layout page={page}>
      <section className="mb-5">
        <ListView selected={view} select={opt => setView((view = opt))} />
        <h4 className="font-weight-bold">Featured stories</h4>
        <PostList view={view} data={posts} />
      </section>

      <PreFooter />
    </Layout>
  );
};

export default compose(
  withPage("home-page"),
  withPosts()
)(Index);
