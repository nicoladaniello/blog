import React from "react";
import withPosts from "../../containers/withPosts";
import PostListWidget from "../Widgets/PostListWidget";

const FeaturedPostsWidget = withPosts({ first: 5 })(PostListWidget);

const LayoutSidebar = () => {
  return <FeaturedPostsWidget title="Featured" />;
};

export default LayoutSidebar;
