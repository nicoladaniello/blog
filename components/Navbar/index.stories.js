import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import Navbar from "./index.js";
import { NavbarMenuData } from "../NavbarMenu/index.stories.js";

export const navbarProps = {
  menu: NavbarMenuData,
  settings: {
    title: "Blog"
  }
};

storiesOf("Navbar", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Navbar {...navbarProps} />);
