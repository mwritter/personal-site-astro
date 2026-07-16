import { defineStoryRules } from "@storybook-astro/framework/node";

export default defineStoryRules({
  rules: [
    {
      match: ["component-recentblogpost--*", "component-resumesection--*"],
      use: ({ mock }) => {
        mock("astro:content", "./mocks/astro-content.ts");
      },
    },
  ],
});
