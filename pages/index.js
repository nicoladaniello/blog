import React from "react";
import { compose } from "recompose";
import withPage from "../containers/withPage";
import withPosts from "../containers/withPosts";
import Layout from "../components/common/Layout";
import PreFooter from "../components/PreFooter";
import PostList from "../components/PostList";

const Index = ({ page, posts }) => {
  return (
    <Layout page={page}>
      <section className="my-5">
        <h4 className="font-weight-bold">Recent stories</h4>
        <PostList data={posts} />
      </section>

      <PreFooter />
    </Layout>
  );
};

export default compose(
  withPage("home-page"),
  withPosts()
)(Index);
