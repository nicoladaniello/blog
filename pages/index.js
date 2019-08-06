import React, { useState } from "react";
import Link from "next/link";
import { compose, withProps } from "recompose";
import withPage from "../containers/withPage";
import withPosts from "../containers/withPosts";
import Layout from "../components/common/Layout";
import PreFooter from "../components/PreFooter";
import PostList from "../components/PostList";
import ListView from "../components/ListView";
import NotFound from "../components/NotFound";

const Index = ({ pageData: { pageBy }, postsData: { posts } }) => {
  if (!pageBy) pageBy = { title: "Welcome" };
  if (!posts) return <NotFound page={pageBy} />;

  let [view, setView] = useState();
  return (
    <Layout page={pageBy}>
      <section className="mb-5">
        <div className="row justify-content-end">
          <ListView
            className="col"
            selected={view}
            select={opt => setView((view = opt))}
          />
          <div className="col text-right">
            <Link href="/posts">
              <a className="small text-dark">View all posts</a>
            </Link>
          </div>
        </div>
        <PostList view={view} posts={posts} />
      </section>

      <PreFooter />
    </Layout>
  );
};

export default compose(
  withProps(() => ({ variables: { uri: "home-page" } })),
  withPage,
  withPosts
)(Index);
