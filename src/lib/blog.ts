import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const blogPath = '/blog/';
export const postPath = (post: Post) => `${blogPath}${post.id}/`;

// Los borradores se ven en desarrollo y en la liga de prueba (*.vercel.app), marcados como
// "Borrador" y sin indexar, para poder revisarlos. En el dominio definitivo no se publican.
const showDrafts = !import.meta.env.PROD || new URL(import.meta.env.SITE ?? 'http://localhost').hostname.endsWith('.vercel.app');

/** Artículos visibles, del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => showDrafts || data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
