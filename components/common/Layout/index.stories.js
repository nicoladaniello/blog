import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { StorybookRouterFix } from "../../../.storybook/mockNextRouter.js";
import { NavbarMenuMocks } from "../../Navbar/index.stories.js";
import { FooterMenuMocks } from "../../Footer/index.stories.js";
import { page, pageWithImage } from "../../Header/index.stories.js";
import Layout from "./index.js";

storiesOf("Layout", module)
  .addDecorator(story => (
    <MockedProvider
      mocks={[...NavbarMenuMocks, ...FooterMenuMocks]}
      addTypename={false}
    >
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => (
    <Layout page={page}>
      <h2>Some extra content</h2>
      <p>Just to fill the space</p>
    </Layout>
  ))
  .add("with featured image", () => (
    <Layout page={pageWithImage}>
      <h2>Some extra content</h2>
      <p>Just to fill the space</p>
    </Layout>
  ));
