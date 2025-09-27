import type { PagesFunction } from '@cloudflare/workers-types';

type User = { id: number; name: string };

export const onRequestGet: PagesFunction = async () => {
  // Replace with real database call
  const users: User[] = [
    { id: 1, name: "Tharshan" },
    { id: 2, name: "Vignesh" },
  ];

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};
