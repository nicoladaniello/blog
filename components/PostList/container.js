import withPosts from "../withPosts";
import PostList from ".";

const postsQueryVars = {
  first: 5,
  after: null
};

export default withPosts(postsQueryVars)(PostList);
