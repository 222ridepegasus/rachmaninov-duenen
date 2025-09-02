import { z, defineCollection, image } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    client: z.string(),

    // Keep cover required per your current setup
    cover: z.string(),
    caseCover: z.string().optional(),

    caseSubtitle: z.string().optional(),
    role: z.string().optional(),
    timeframe: z.string().optional(),
    intro: z.string().optional(),

    // Optional helpers used in your slug mapping
    assetsBase: z.string().optional(),
    coverFile: z.string().optional(),
    caseCoverFile: z.string().optional(),

    // New: ordered, modular blocks driven from frontmatter (permissive)
    blocks: z.array(z.any()).optional(),

    // Legacy gallery still supported as a fallback
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

export const collections = { portfolio };