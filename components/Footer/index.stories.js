import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { getMenuItems } from "../../containers/withMenuItems.js";
import { menuItems } from "../NavbarMenu/index.stories.js";
import Footer from "./index.js";

export const FooterMenuMocks = [
  {
    request: {
      query: getMenuItems,
      variables: {
        location: "FOOTER_MENU"
      }
    },
    result: {
      data: { menuItems: { nodes: menuItems } }
    }
  }
];

export const footNote =
  '© 2019, designed and developed by <a href="https://github.com/nicoladaniello/">Nicola D\'Aniello</a>';

storiesOf("Footer", module)
  .addDecorator(story => (
    <MockedProvider mocks={FooterMenuMocks} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Footer note={footNote} />);
