import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { getTags } from "../../../containers/withTags";
import TagListWidgetContainer from "./container";
import TagListWidget from ".";

export const TagListMockQuery = [
  {
    request: { query: getTags },
    result: {
      data: {
        tags: {
          pageInfo: {
            startCursor: null,
            endCursor: null,
            hasNextPage: false,
            hasPreviousPage: false
          },
          nodes: [
            {
              id: "abcd",
              name: "featured",
              slug: "featuerd"
            },
            {
              id: "abcde",
              name: "2019",
              slug: "2019"
            },
            {
              id: "abcdef",
              name: "travel",
              slug: "travel"
            },
            {
              id: "abcdefg",
              name: "popular",
              slug: "popular"
            },
            {
              id: "abcdefgh",
              name: "starred",
              slug: "starred"
            }
          ]
        }
      }
    }
  }
];

storiesOf("TagList Widget", module)
  .addDecorator(story => (
    <MockedProvider mocks={TagListMockQuery} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <div className="p-5 w-50">{story()}</div>)
  .add("default", () => <TagListWidgetContainer />)
  .add("with title", () => <TagListWidgetContainer title="Popular tags" />)
  .add("empty", () => <TagListWidget />);
