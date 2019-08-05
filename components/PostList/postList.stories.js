import React from "react";
import { storiesOf } from "@storybook/react";

import PostList, { PostListViewEnum } from ".";

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
  .add("Cols view", () => <PostList posts={PostListdata} />)
  .add("Rows view", () => (
    <PostList posts={PostListdata} view={PostListViewEnum.ROWS} />
  ))
  .add("with load more", () => <PostList posts={PostListdataWithPageInfo} />)
  .add("empty", () => <PostList />);
