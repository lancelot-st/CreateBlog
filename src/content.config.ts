import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    hero: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional()
  })
});

export const collections = { posts };
