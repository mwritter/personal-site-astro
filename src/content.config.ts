// 1. Import utilities from `astro:content`
import { defineCollection, type CollectionEntry } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const resume = defineCollection({
  loader: glob({ base: "./src/content/resume", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.number().optional(),
    endDate: z.number().optional(),
    // Open source projects
    link: z.string().optional(),
    description: z.string().optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog, resume };

export const publishedPostFilter = (post: CollectionEntry<"blog">) =>
  Boolean(post.data.pubDate);
