import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { featuredImage } from "../common/Card/CardImage/index.stories";
import { CategoryPropsData } from "../Category/index.stories";
import Post from ".";

export const postData = {
  title: "A blog post in a card",
  uri: "fake/uri",
  excerpt: "Just some dummy content to fill up the screen",
  featuredImage: { ...featuredImage },
  category: { ...CategoryPropsData }
};

storiesOf("Post", module)
  .addDecorator(story => <div className="p-5">{story()}</div>)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Post data={postData} style={{ width: "300px" }} />);
