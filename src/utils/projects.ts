import type { CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'work'>;

/** Explicit `order` first, then most recent `publishDate`. */
export function sortProjects(projects: Project[]): Project[] {
	return [...projects].sort((a, b) => {
		const oa = a.data.order ?? Number.POSITIVE_INFINITY;
		const ob = b.data.order ?? Number.POSITIVE_INFINITY;
		if (oa !== ob) return oa - ob;
		return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
	});
}
