import Layout from "../components/common/Layout";
import PreFooter from "../components/PreFooter";
import PostList from "../components/PostList";
import { layoutProps } from "../components/common/Layout/index.stories";
import { compose } from "recompose";
import withSettings from "../containers/withSettings";
import withPage from "../containers/withPage";
import withPosts from "../containers/withPosts";
import withMenuItems from "../containers/WithMenuItems";

const Index = ({ page, settings, posts, menuItems }) => {
  console.log(menuItems);

  return (
    <Layout {...layoutProps}>
      <section className="my-5">
        <h4 className="font-weight-bold">Recent stories</h4>
        <PostList data={posts} />
      </section>

      <PreFooter />

      <section className="my-5">
        <h4>Meet the Authors</h4>
      </section>
    </Layout>
  );
};

export default compose(
  withPage("thank-you"),
  withPosts()
)(Index);
