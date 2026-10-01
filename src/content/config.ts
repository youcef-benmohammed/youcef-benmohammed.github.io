import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			// 'bioinformatics' projects are featured; 'side' = data-science side projects
			category: z.enum(['bioinformatics', 'side']).default('bioinformatics'),
			// lower = shown first; projects without order fall back to date
			order: z.number().optional(),
		}),
	}),
};
