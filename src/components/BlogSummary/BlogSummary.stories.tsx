import type { ComponentProps } from "astro/types";
import BlogSummary from "./BlogSummary.astro";

export default {
    title: 'Component/BlogSummary',
    component: BlogSummary
}

export const Default = {
    args: {
        post: {
            id: "1",
            collection: "blog",
            data: {
                title: "Blog Post",
                description: "This is a blog post",
                pubDate: new Date()
            }
        }
    } satisfies ComponentProps<typeof BlogSummary>
} 