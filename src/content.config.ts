import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.object({ es: z.string(), en: z.string() }),
    role: z.object({ es: z.string(), en: z.string() }),
    period: z.object({ es: z.string(), en: z.string() }),
    description: z.object({ es: z.string(), en: z.string() }),
    link: z.string().url().nullable().default(null),
    githubUrl: z.string().url().nullable().default(null),
    highlights: z.object({
      es: z.array(z.string()),
      en: z.array(z.string()),
    }),
  }),
});

export const collections = { projects };
