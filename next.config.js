const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");
const withOptimizedImages = require("next-optimized-images");

module.exports = withCSS(
  withOptimizedImages(
    withSass(
      withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer
      })
    )
  )
);
