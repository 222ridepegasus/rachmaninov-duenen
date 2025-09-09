import { defineCollection, z, image } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),

    cover: z.string(),
    caseCover: z.string().optional(),

    caseSubtitle: z.string().optional(),
    role: z.string().optional(),
    timeframe: z.string().optional(),
    intro: z.string().optional(),

    sortOrder: z.number().optional(),

    assetsBase: z.string().optional(),
    coverFile: z.string().optional(),
    caseCoverFile: z.string().optional(),

    blocks: z.array(z.any()).optional(),

    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
          ratio: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((d) => new Date(d)),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { portfolio, blog };