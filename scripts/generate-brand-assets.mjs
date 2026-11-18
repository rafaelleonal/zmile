// Genera los archivos de marca de /public a partir del logo y las fotos de src/assets:
//   logo.png, favicon.svg, favicon.ico, apple-touch-icon.png y og.jpg (1200×630).
// Se ejecuta a mano cuando cambie el logo o la foto:  node scripts/generate-brand-assets.mjs
import { writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

// sharp viene instalado como dependencia de Astro.
const require = createRequire(import.meta.resolve('astro'));
const sharp = require('sharp');

const CLAY = '#937869';
const INK = '#000000';
const out = (name) => new URL(`../public/${name}`, import.meta.url);
const asset = (name) => new URL(`../src/assets/${name}`, import.meta.url).pathname;

// ── Favicon: la "Z" del logotipo con su sonrisa, sobre el color primario ──
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="${CLAY}"/>
  <path d="M15 13h18L15 31h18" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="square" stroke-linejoin="miter"/>
  <path d="M17 37.5c4.5 3 9.5 3 14 0" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
</svg>
`;
await writeFile(out('favicon.svg'), faviconSvg);

const png48 = await sharp(Buffer.from(faviconSvg), { density: 300 }).resize(48, 48).png().toBuffer();
await sharp(Buffer.from(faviconSvg), { density: 600 }).resize(180, 180).png().toFile(out('apple-touch-icon.png').pathname);

// favicon.ico = contenedor ICO con un PNG de 48×48 dentro.
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reservado
header.writeUInt16LE(1, 2); // tipo: icono
header.writeUInt16LE(1, 4); // número de imágenes
header.writeUInt8(48, 6); // ancho
header.writeUInt8(48, 7); // alto
header.writeUInt8(0, 8); // paleta
header.writeUInt8(0, 9); // reservado
header.writeUInt16LE(1, 10); // planos
header.writeUInt16LE(32, 12); // bits por pixel
header.writeUInt32LE(png48.length, 14); // tamaño
header.writeUInt32LE(22, 18); // offset
await writeFile(out('favicon.ico'), Buffer.concat([header, png48]));

// ── Logo para datos estructurados ──
await sharp(asset('zmile-logo.png')).resize({ width: 600 }).png({ compressionLevel: 9, palette: true }).toFile(out('logo.png').pathname);

// ── Imagen para compartir (Open Graph): logo a la izquierda, foto a la derecha ──
const W = 1200;
const H = 630;
const PANEL = 540;
const photo = await sharp(asset('clinic-a.jpg')).resize(W - PANEL, H, { fit: 'cover', position: 'attention' }).toBuffer();
const logo = await sharp(asset('zmile-logo.png')).resize({ width: 380 }).toBuffer();
const logoMeta = await sharp(logo).metadata();
// El fondo del panel toma el color exacto del fondo del logo para que no se note el recorte.
const { data: px } = await sharp(asset('zmile-logo.png')).extract({ left: 4, top: 4, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
const panelColor = { r: px[0], g: px[1], b: px[2] };

const caption = `<svg xmlns="http://www.w3.org/2000/svg" width="${PANEL}" height="120">
  <text x="${PANEL / 2}" y="40" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="17" font-weight="500" letter-spacing="5" fill="#928f8c">CLÍNICA DENTAL</text>
  <text x="${PANEL / 2}" y="78" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="17" font-weight="500" letter-spacing="5" fill="${INK}">ROMA SUR · CDMX</text>
</svg>`;

const logoTop = Math.round((H - logoMeta.height) / 2) - 50;
await sharp({ create: { width: W, height: H, channels: 3, background: panelColor } })
  .composite([
    { input: photo, left: PANEL, top: 0 },
    { input: logo, left: Math.round((PANEL - logoMeta.width) / 2), top: logoTop },
    { input: Buffer.from(caption), left: 0, top: logoTop + logoMeta.height + 10 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(out('og.jpg').pathname);

console.log('Listo: favicon.svg, favicon.ico, apple-touch-icon.png, logo.png, og.jpg');
