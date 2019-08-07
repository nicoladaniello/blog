import React from "react";
import { storiesOf } from "@storybook/react";

import PostList from ".";

import { postData } from "../Post/index.stories";

export const PostListdata = {
  posts: [postData, postData, postData, postData, postData].map((p, id) => ({
    ...p,
    id,
    postId: id + 100
  }))
};

export const PostListdataWithPageInfo = {
  ...PostListdata,
  pageInfo: {
    hasNextPage: true
  }
};

storiesOf("Post List", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .add("default", () => <PostList posts={PostListdata} />)
  .add("with load more", () => <PostList posts={PostListdataWithPageInfo} />)
  .add("empty", () => <PostList />);
