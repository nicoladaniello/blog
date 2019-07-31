import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "./index.js";

import { StorybookRouterFix } from "../../../.storybook/mockNextRouter.js";
import { page } from "../../Header/index.stories.js";
import { navbarProps } from "../../Navbar/index.stories.js";
import { footerProps } from "../../Footer/index.stories.js";

export const layoutProps = {
  page,
  navbarProps,
  footerProps
};

storiesOf("Layout", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => (
    <Layout {...layoutProps}>
      <h2>Some extra content</h2>
      <p>Just to fill the space</p>
    </Layout>
  ));
