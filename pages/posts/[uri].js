import Layout from "../../components/common/Layout";
import { compose, branch } from "recompose";
import { withRouter } from "next/router";
import withPost from "../../containers/withPost";

const Post = ({ post = {} }) => {
  return <Layout page={post} />;
};

export default compose(
  withRouter,
  withPost
)(Post);
