import { configure } from "@storybook/react";
import "../styles.scss";

const req = require.context(
  "../components",
  true,
  /^((?![\\/]node_modules|vendor[\\/]).)*\.stories\.js$/
);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
