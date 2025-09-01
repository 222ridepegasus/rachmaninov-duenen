// src/content/config.ts
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    // Path to your thumbnail image in /public (e.g. "/images/portfolio/starborne.jpg")
    cover: z.string().min(1),
  }),
});

export const collections = { portfolio };