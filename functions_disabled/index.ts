import type { PagesFunction } from '@cloudflare/workers-types';

export const onRequestGet: PagesFunction = async () => {
  return new Response(
    JSON.stringify({ status: "ok", service: "NexFounders API" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
