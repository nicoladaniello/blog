import React from "react";
import { storiesOf } from "@storybook/react";

import PostList, { PostListViewEnum } from ".";

import { postData } from "../Post/index.stories";

export const PostListdata = {
  posts: [postData, postData, postData, postData, postData]
};

export const PostListdataWithPageInfo = {
  ...PostListdata,
  pageInfo: {
    hasNextPage: true
  }
};

storiesOf("Post List", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .add("Cols view", () => <PostList data={PostListdata} />)
  .add("Rows view", () => (
    <PostList data={PostListdata} view={PostListViewEnum.ROWS} />
  ))
  .add("with load more", () => <PostList data={PostListdataWithPageInfo} />)
  .add("empty", () => <PostList />);
