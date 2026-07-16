// Mock for the `astro:content` virtual module, used in Storybook via
// story-rules.ts. The Astro Container that renders .astro components in
// Storybook can't load real content collections.

import {
  createComponent,
  renderTemplate,
  unescapeHTML,
} from "astro/runtime/server/index.js";

type MockEntry = {
  id: string;
  collection: string;
  data: {
    title: string;
    description: string;
    pubDate?: Date;
    updatedDate?: Date;
  };
};

const blog: MockEntry[] = [
  {
    id: "building-with-astro",
    collection: "blog",
    data: {
      title: "Building With Astro",
      description: "Notes on building this portfolio with Astro.",
      pubDate: new Date("2026-06-20"),
    },
  },
  {
    id: "storybook-for-astro-components",
    collection: "blog",
    data: {
      title: "Storybook for Astro Components",
      description: "Documenting .astro components in isolation.",
      pubDate: new Date("2026-05-11"),
    },
  },
  {
    id: "a-draft-post",
    collection: "blog",
    data: {
      title: "A Draft Post",
      description: "No pubDate, so publishedPostFilter should exclude it.",
    },
  },
  {
    id: "content-collections-deep-dive",
    collection: "blog",
    data: {
      title: "Content Collections Deep Dive",
      description: "How Astro content collections work under the hood.",
      pubDate: new Date("2026-03-02"),
    },
  },
];

const collections: Record<string, MockEntry[]> = { blog };

export const getCollection = async (
  collection: string,
  filter?: (entry: MockEntry) => boolean,
) => {
  const entries = collections[collection] ?? [];
  return filter ? entries.filter(filter) : entries;
};

// content.config.ts imports defineCollection from astro:content,
// so the mock must provide it as well.
export const defineCollection = (config: unknown) => config;

// Mirrors Astro's own render(): entries loaded by the glob loader carry
// their pre-rendered markdown in `entry.rendered.html`.
export const render = async (entry: {
  rendered?: { html?: string };
  body?: string;
}) => ({
  Content: createComponent(() =>
    renderTemplate`${unescapeHTML(entry.rendered?.html ?? entry.body ?? "")}`,
  ),
  headings: [],
  remarkPluginFrontmatter: {},
});
