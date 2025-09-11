// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Reusable block schema (matches what your template expects)
const imageItem = z.object({
  src: z.string().optional(),
  file: z.string().optional(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  ratio: z.string().optional(),
  layout: z.enum(["full", "narrow"]).optional(), // ← add this
});

const blockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("cover"),
    image: z.string().optional(),
    imageFile: z.string().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    alt: z.string().optional(),
  }),
  z.object({
    type: z.literal("intro"),
  }),
  z.object({
    type: z.literal("image"),
    images: z.array(imageItem),
  }),
  z.object({
    type: z.literal("text"),
    index: z.string().optional(),
    heading: z.string().optional(),
    body: z.string().optional(),
  }),
]);

const tabSchema = z.object({
  id: z.string(),
  label: z.string(),
  blocks: z.array(blockSchema).optional(),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // keep your existing fields here:
    sortOrder: z.number().optional(),
    client: z.string().optional(),
    assetsBase: z.string().optional(),
    cover: z.string().optional(),
    caseCover: z.string().optional(),
    coverFile: z.string().optional(),
    caseCoverFile: z.string().optional(),
    caseSubtitle: z.string().optional(),
    role: z.string().optional(),
    timeframe: z.string().optional(),
    intro: z.string().optional(),
    draft: z.boolean().optional(), // ← add this
    gallery: z
      .array(
        z.object({
          src: z.string().optional(),
          file: z.string().optional(),
          alt: z.string().optional(),
          caption: z.string().optional(),
          ratio: z.string().optional(),
        }),
      )
      .optional(),
    // legacy blocks (non-tab pages like Starborne)
    blocks: z.array(blockSchema).optional(),
    // NEW: tabbed content
    tabs: z.array(tabSchema).optional(),
  }),
});

export const collections = {
  portfolio,
};