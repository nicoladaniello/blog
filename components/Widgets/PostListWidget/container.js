import { withProps, compose } from "recompose";
import PostListWidget from ".";
import withPosts from "../../../containers/withPosts";

const PostListWidgetContainer = compose(
  withProps(props => props),
  withPosts
)(PostListWidget);

export default PostListWidgetContainer;
