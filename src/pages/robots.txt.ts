import type { APIRoute } from 'astro';

// Buscadores y asistentes de IA con acceso completo al sitio. Se listan de forma
// explícita los rastreadores de IA (búsqueda, respuesta en vivo y entrenamiento) para
// dejar claro que la clínica SÍ quiere aparecer en sus respuestas.
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'MistralAI-User',
  'DuckAssistBot',
  'CCBot',
];

export const GET: APIRoute = ({ site }) => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...aiAgents.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
    `Sitemap: ${new URL('/sitemap-index.xml', site).href}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
