import withPosts from "../withPosts";
import PostList from ".";
import { compose, withProps } from "recompose";

const postListContainer = compose(
  withProps(props => props),
  withPosts
)(PostList);

export default postListContainer;
