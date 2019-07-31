import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./index.js";

import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { featuredImage } from "../common/Card/CardImage/index.stories.js";
import { navbarProps } from "../Navbar/index.stories.js";

export const page = {
  title: "Page title",
  featuredImage: null,
  content:
    "<h1>Page informations</h1><p>This is some content within the page</p>"
};

export const headerPage = {
  page,
  navbarProps
};

export const headerPropsWithImage = {
  page: {
    ...page,
    featuredImage
  },
  navbarProps
};

storiesOf("Header", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Header {...headerProps} />)
  .add("with image", () => <Header {...headerPropsWithImage} />);
