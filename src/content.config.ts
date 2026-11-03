import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { POST_CATEGORIES } from './site';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.enum(POST_CATEGORIES).default('개발'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string().trim().min(1)).default([]).transform((tags) => [...new Set(tags)]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
