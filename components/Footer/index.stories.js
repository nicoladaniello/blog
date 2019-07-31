import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import Footer from "./index.js";

export const footerMenuData = {
  name: "footer menu",
  menuItems: [
    {
      id: "abcd",
      menuItemId: 1,
      url: "fakeurl",
      label: "Blog"
    },
    {
      id: "bcde",
      menuItemId: 2,
      url: "fakeurl",
      label: "Legal"
    },
    {
      id: "cdef",
      menuItemId: 3,
      url: "fakeurl",
      label: "FAQ"
    },
    {
      id: "defg",
      menuItemId: 4,
      url: "fakeurl",
      label: "Contact us"
    }
  ]
};
export const footNote =
  '© 2019, designed and developed by <a href="https://github.com/nicoladaniello/">Nicola D\'Aniello</a>';

export const footerProps = {
  menu: footerMenuData,
  note: footNote,
  settings: {
    title: "Blog"
  }
};

storiesOf("Footer", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .add("default", () => <Footer {...footerProps} />);
