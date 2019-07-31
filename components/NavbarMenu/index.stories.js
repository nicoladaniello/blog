import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import NavbarMenu from "./index.js";

export const NavbarMenuData = {
  name: "navbar menu",
  menuItems: [
    {
      id: "abcd",
      menuItemId: 1,
      url: "fakeurl",
      label: "fake menuitem"
    }
  ]
};

storiesOf("Navbar Menu", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <NavbarMenu menu={NavbarMenuData} />);
