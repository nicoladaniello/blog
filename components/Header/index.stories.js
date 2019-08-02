import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { featuredImage } from "../common/Card/CardImage/index.stories.js";
import { NavbarMenuMocks } from "../Navbar/index.stories.js";
import Header from "./index.js";

export const page = {
  title: "Page title",
  featuredImage: null,
  content:
    "<h1>Page informations</h1><p>This is some content within the page</p>"
};

export const pageWithImage = {
  ...page,
  featuredImage
};

storiesOf("Header", module)
  .addDecorator(story => (
    <MockedProvider mocks={[...NavbarMenuMocks]} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Header page={page} />)
  .add("with image", () => <Header page={pageWithImage} />);
