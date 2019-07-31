import React from "react";
import { storiesOf } from "@storybook/react";

import Tag from ".";

export const TagPropsData = {
  name: "Featured",
  slug: "featured"
};

storiesOf("Tag", module).add("default", () => <Tag {...TagPropsData} />);
