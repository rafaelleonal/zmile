// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dirección del sitio: de ella dependen canonical, hreflang, sitemap, imagen al compartir
// y llms.txt. Orden de prioridad:
//   1. Variable SITE_URL (en Cloudflare: Settings → Variables and Secrets). Mientras se
//      prueba en *.pages.dev, ponerla con esa dirección; al conectar el dominio, cambiarla
//      por el dominio definitivo.
//   2. Vercel: la liga del propio despliegue (versión de prueba).
//   3. Cloudflare Pages, ramas que no son main: la liga de ese despliegue.
//   4. Dominio por defecto: zmileclinic.com.
const vercelHost =
  process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL;
const cloudflarePreview =
  process.env.CF_PAGES && process.env.CF_PAGES_BRANCH !== 'main' ? process.env.CF_PAGES_URL : undefined;
const SITE =
  process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : cloudflarePreview) || 'https://zmileclinic.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  // Rutas del sitio anterior (Lovable) → nuevas rutas en español.
  redirects: {
    '/appointment': '/agenda/',
    '/contact': '/contacto/',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
