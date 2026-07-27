// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fira Mono",
      cssVariable: "--font-fira-mono",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Caveat",
      cssVariable: "--font-caveat",
    },
  ],

  integrations: [react(), mdx()],

  markdown: {
    shikiConfig: {
      theme: "night-owl",
      wrap: false,
    },
  },
});