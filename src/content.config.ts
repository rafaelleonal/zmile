import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Artículos del blog: un archivo Markdown por artículo en src/content/blog/.
// Se editan desde Pages CMS (configuración en .pages.yml) o directo en el repositorio.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Zmile Dental Clinic'),
    // Ruta pública de la imagen de portada (p. ej. /media/limpieza.jpg). Opcional.
    cover: z.string().nullish(),
    coverAlt: z.string().nullish(),
    // Los borradores se ven en desarrollo, pero no se publican.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
