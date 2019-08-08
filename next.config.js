const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = withCSS(
  withSass(
    withPurgeCss({
      purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer
    })
  )
);
