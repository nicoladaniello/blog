import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { getPosts } from "../../../containers/withPosts";
import { PostListdata } from "../../PostList/postList.stories";
import PostListWidget from ".";

export const PostListMockQuery = [
  {
    request: { query: getPosts },
    result: {
      data: {
        posts: {
          edges: PostListdata.posts.map(post => {
            node: post;
          })
        }
      }
    }
  }
];

storiesOf("Post List Widget", module)
  .addDecorator(story => (
    <MockedProvider mocks={PostListMockQuery} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .add("default", () => <PostListWidget />);
