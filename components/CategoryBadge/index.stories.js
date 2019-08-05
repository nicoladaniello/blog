import React from "react";
import { storiesOf } from "@storybook/react";

import CategoryBadge from ".";

export const CategoryBadgePropsData = {
  data: { name: "Featured", slug: "featured" }
};

storiesOf("Category Badge", module).add("default", () => (
  <CategoryBadge {...CategoryBadgePropsData} />
));
