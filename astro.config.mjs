// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio final del sitio. Cámbialo aquí (o con la variable SITE_URL al hacer build)
// cuando se compre el dominio: de él dependen canonical, hreflang, sitemap y llms.txt.
// Mientras no haya dominio, en Vercel se usa la liga del propio despliegue para que
// los enlaces y la imagen al compartir funcionen en la versión de prueba.
const vercelHost =
  process.env.VERCEL_ENV === 'production' ? process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL;
const SITE = process.env.SITE_URL ?? (vercelHost ? `https://${vercelHost}` : 'https://zmiledentalclinic.com');

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
