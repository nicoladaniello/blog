import React from "react";
import { storiesOf } from "@storybook/react";

import Category from ".";

export const CategoryPropsData = {
  data: { name: "Featured", slug: "featured" }
};

storiesOf("Category", module).add("default", () => (
  <Category {...CategoryPropsData} />
));
