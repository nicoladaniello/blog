import React from "react";
import { storiesOf } from "@storybook/react";
import { StorybookRouterFix } from "../../.storybook/mockNextRouter.js";
import NavbarMenu from "./index.js";

export const menuItems = [
  {
    id: "bmF2X21lbnVfaXRlbTo5NA==",
    menuItemId: 94,
    label: "Home",
    url: "fakeurl"
  },
  {
    id: "bmF2X21lbnVfaXRlbTo5Mw==",
    menuItemId: 93,
    label: "Blog",
    url: "fakeurl"
  },
  {
    id: "bmF2X21lbnVfaXRlbTo1MQ==",
    menuItemId: 51,
    label: "Topics",
    url: "fakeurl"
  },
  {
    id: "bmF2X21lbnVfaXRlbTo1Mg==",
    menuItemId: 52,
    label: "Contact me",
    url: "fakeurl"
  }
];

storiesOf("Navbar Menu", module)
  .addDecorator(story => <StorybookRouterFix>{story()}</StorybookRouterFix>)
  .addDecorator(story => <div className="navbar navbar-light">{story()}</div>)
  .add("default", () => <NavbarMenu menuItems={menuItems} />);
