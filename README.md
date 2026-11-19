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

## Formulario de citas

`/agenda/` arma un mensaje con los datos y abre WhatsApp (`wa.me`) hacia el número de la
clínica. No guarda nada ni requiere servidor.

## Despliegue

Cualquier hosting estático sirve: comando de build `pnpm build`, carpeta de salida `dist`.
