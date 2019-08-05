import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { getPosts } from "../../../containers/withPosts";
import { PostListdata } from "../../PostList/postList.stories";
import PostListWidgetContainer from "./container";
import PostListWidget from ".";

export const PostListMockQuery = [
  {
    request: { query: getPosts },
    result: {
      data: {
        posts: {
          pageInfo: {
            startCursor: null,
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false
          },
          nodes: PostListdata.posts
        }
      }
    }
  }
];

storiesOf("PostList Widget", module)
  .addDecorator(story => (
    <MockedProvider mocks={PostListMockQuery} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <div className="p-5 w-50">{story()}</div>)
  .add("default", () => <PostListWidgetContainer />)
  .add("with title", () => <PostListWidgetContainer title="Widget title" />)
  .add("empty", () => <PostListWidget />);
