import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { publishedPostFilter } from "../content.config";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", publishedPostFilter);

  return rss({
    title: "mwritter — blog",
    description: "Matthew Ritter — software engineer. Portfolio and blog.",
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate!.valueOf() - a.data.pubDate!.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate!,
        link: `/blog/${post.id}/`,
      })),
  });
}
