import type { APIRoute } from 'astro';
import { getPosts } from '../lib/blog';
import { llmsTxt } from '../lib/llms';

export const GET: APIRoute = async ({ site }) =>
  new Response(llmsTxt(site!, await getPosts()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
