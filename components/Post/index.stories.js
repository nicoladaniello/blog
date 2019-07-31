import React from "react";
import { storiesOf } from "@storybook/react";

import Post from ".";
import { featuredImage } from "../common/Card/CardImage/index.stories";
import { CategoryPropsData } from "../Category/index.stories";

export const postData = {
  title: "A blog post in a card",
  excerpt: "Just some dummy content to fill up the screen",
  featuredImage: { ...featuredImage },
  category: { ...CategoryPropsData }
};

storiesOf("Post", module).add("default", () => (
  <Post data={postData} style={{ width: "300px" }} />
));
