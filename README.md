# Zmile Dental Clinic — sitio web (Astro)

Reconstrucción en [Astro](https://astro.build) del sitio de Zmile Dental Clinic (Roma Sur, CDMX),
con el mismo diseño aprobado, SEO local y optimización para asistentes de IA.
Sitio 100 % estático: sin base de datos ni servidor.

## Comandos

| Comando        | Qué hace                                         |
| -------------- | ------------------------------------------------ |
| `pnpm install` | Instala dependencias                             |
| `pnpm dev`     | Servidor local en `http://localhost:4321`        |
| `pnpm build`   | Genera el sitio en `dist/`                       |
| `pnpm preview` | Sirve `dist/` para revisar el build              |
| `pnpm astro check` | Revisión de tipos                            |

## Dónde se edita cada cosa

- **Datos de la clínica** (teléfono, dirección, horario, mapa, redes): `src/data/site.ts`.
  Es la única fuente: de ahí salen el sitio, el JSON-LD, `llms.txt` y el formulario.
- **Decisiones de diseño por aprobar**: `site.design` en ese mismo archivo
  (`whatsappGreen`, `mobileCtaBar`). Con `false` se vuelve al diseño original.
- **Especialidades** (textos, tratamientos, preguntas frecuentes, ES/EN): `src/data/specialties.ts`.
- **Reseñas y preguntas frecuentes del inicio**: `src/data/content.ts`.
- **Textos de interfaz ES/EN y rutas**: `src/i18n/ui.ts`.
- **Colores y tipografía**: `src/styles/global.css`.
- **Dominio final**: `zmileclinic.com`, definido como `SITE` en `astro.config.mjs` (o variable de entorno `SITE_URL` al hacer build).
- **Logo del encabezado y el pie**: `src/assets/zmile-logo.svg` (vectorizado, fondo transparente).
- **Favicon, logo e imagen para compartir**: `node scripts/generate-brand-assets.mjs`.

## Rutas

| Español                      | English                         |
| ---------------------------- | ------------------------------- |
| `/`                          | `/en/`                          |
| `/agenda/`                   | `/en/appointment/`              |
| `/contacto/`                 | `/en/contact/`                  |
| `/especialidades/`           | `/en/specialties/`              |
| `/especialidades/<slug>/`    | `/en/specialties/<slug>/`       |

Además: `/robots.txt`, `/sitemap-index.xml`, `/llms.txt`, `/llms-full.txt`.
Las rutas del sitio anterior (`/appointment`, `/contact`) redirigen a las nuevas.

## Blog y editor sin código (Pages CMS)

Los artículos son archivos Markdown en `src/content/blog/`. La clínica los escribe desde
[Pages CMS](https://pagescms.org), un editor de código abierto y gratuito que guarda cada
cambio como commit en este repositorio; su configuración está en `.pages.yml`.

Puesta en marcha (una sola vez):

1. Entrar a https://app.pagescms.org con la cuenta de GitHub dueña del repositorio.
2. Instalar la GitHub App de Pages CMS sobre este repositorio.
3. Invitar por correo a quien vaya a escribir (no necesita cuenta de GitHub).

Para escribir: Blog → nuevo artículo → título, resumen, fecha y texto. Mientras «Borrador»
esté activado el artículo no se publica; al desactivarlo aparece en `/blog/` y el enlace
«Blog» entra solo al menú. Las imágenes se suben a `public/media/`.

El sitio se vuelve a publicar con cada commit solo si el hospedaje está conectado al
repositorio de GitHub (Cloudflare Pages o la integración de Git de Vercel).

## Sección «Quiénes somos»

Los datos y textos de la directora están en `src/data/team.ts`; su foto, en
`src/assets/dra-laura-rojas.jpg`.

## Formulario de citas

`/agenda/` arma un mensaje con los datos y abre WhatsApp (`wa.me`) hacia el número de la
clínica. No guarda nada ni requiere servidor.

## Publicación (Cloudflare Pages)

El sitio se publica gratis en Cloudflare Pages, conectado a este repositorio: cada push a
`main`, incluidos los artículos guardados desde Pages CMS, se publica solo en 1–2 minutos.

Configuración inicial (una sola vez):

1. Crear una cuenta en https://dash.cloudflare.com/sign-up (de preferencia con un correo
   de la clínica, para que el sitio no dependa de una cuenta personal).
2. **Workers & Pages → Create application → pestaña Pages → Import an existing Git
   repository.** Autorizar GitHub y elegir el repositorio `zmile`.
3. En *Set up builds and deployments*:
   - Framework preset: `Astro`
   - Production branch: `main`
   - Build command: `pnpm build`
   - Build output directory: `dist`
4. **Save and Deploy.** El sitio queda en `https://<proyecto>.pages.dev`.
5. En el proyecto → **Settings → Variables and Secrets**, agregar `SITE_URL` con esa
   dirección `https://<proyecto>.pages.dev` y volver a desplegar (para que enlaces e imagen
   al compartir apunten a la versión de prueba).
6. Cuando haya dominio: **Custom domains → Set up a custom domain**, seguir los pasos de
   DNS que indique Cloudflare (si el dominio está en otro registrador, agregar ahí los
   registros sin tocar los del correo) y cambiar `SITE_URL` por el dominio definitivo,
   por ejemplo `https://zmileclinic.com`.

Ya incluido en el repositorio:

- `.node-version` (Node 24) y `packageManager` en `package.json` (pnpm), que Cloudflare lee.
- `public/_headers`: las direcciones `*.pages.dev` no se indexan en Google y los archivos
  de `/_astro/` se guardan en caché un año.
- Las páginas 404 y las redirecciones del sitio anterior funcionan sin configuración extra.

Versión de prueba anterior: `vercel.json` y la liga `zmile-clinic.vercel.app` (se puede
borrar el proyecto de Vercel cuando el sitio esté en Cloudflare).
