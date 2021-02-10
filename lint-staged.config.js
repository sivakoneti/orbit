// @flow

module.exports = {
  "*.{js,js.flow,ts}": "eslint --fix --report-unused-disable-directives",
  "*.{md,json,yaml,yml}": "prettier --write",
  "packages/orbit-components/**/*.svg": "yarn orbit-components check:icons",
  ".browserslistrc": () => ["yarn update-supported-browsers"],
  "**/__examples__/**/*.js": () => ["lerna run --scope @kiwicom/orbit-components build:examples"],
};
