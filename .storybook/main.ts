export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: {
    name: "@storybook-astro/framework",
    options: {
      storyRules: ".storybook/story-rules.ts",
    },
  },
};
