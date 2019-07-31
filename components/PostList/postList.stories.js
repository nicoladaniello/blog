import React from "react";
import { storiesOf } from "@storybook/react";

import PostList, { PostListViewEnum } from ".";

import { postData } from "../Post/index.stories";

export const data = {
  posts: [postData, postData, postData, postData, postData]
};

export const dataWithPageInfo = {
  ...data,
  pageInfo: {
    hasNextPage: true
  }
};

storiesOf("Post List", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .add("Cols view", () => <PostList data={data} />)
  .add("Rows view", () => <PostList data={data} view={PostListViewEnum.ROWS} />)
  .add("with load more", () => <PostList data={dataWithPageInfo} />)
  .add("empty", () => <PostList />);
