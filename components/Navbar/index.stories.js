import React from "react";
import { storiesOf } from "@storybook/react";
import { MockedProvider } from "react-apollo/test-utils";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import { getMenuItems } from "../../containers/withMenuItems.js";
import { menuItems } from "../NavbarMenu/index.stories.js";

import Navbar from "./index.js";

export const NavbarMenuMocks = [
  {
    request: {
      query: getMenuItems,
      variables: {
        location: "NAVBAR_MENU"
      }
    },
    result: {
      data: { menuItems: { nodes: menuItems } }
    }
  }
];

storiesOf("Navbar", module)
  .addDecorator(story => (
    <MockedProvider mocks={NavbarMenuMocks} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Navbar />);
