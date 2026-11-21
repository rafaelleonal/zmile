import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const blogPath = '/blog/';
export const postPath = (post: Post) => `${blogPath}${post.id}/`;

// Los borradores se ven en desarrollo y en las ligas de prueba (*.vercel.app, *.pages.dev),
// marcados como "Borrador" y sin indexar, para poder revisarlos. En el dominio definitivo
// no se publican.
const siteHost = new URL(import.meta.env.SITE ?? 'http://localhost').hostname;
const showDrafts = !import.meta.env.PROD || siteHost.endsWith('.vercel.app') || siteHost.endsWith('.pages.dev');

/** Artículos visibles, del más reciente al más antiguo. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => showDrafts || data.draft !== true);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (date: Date) =>
  date.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Minutos de lectura estimados (unas 200 palabras por minuto). */
export const readingMinutes = (post: Post) =>
  Math.max(1, Math.round((post.body ?? '').split(/\s+/).filter(Boolean).length / 200));
