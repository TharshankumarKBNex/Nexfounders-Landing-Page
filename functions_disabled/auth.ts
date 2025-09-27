import type { PagesFunction } from '@cloudflare/workers-types';

type LoginRequest = { username: string; password: string };

export const onRequestPost: PagesFunction = async ({ request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Runtime type check
  if (
    typeof body === "object" &&
    body !== null &&
    "username" in body &&
    "password" in body &&
    typeof (body as any).username === "string" &&
    typeof (body as any).password === "string"
  ) {
    const { username, password } = body as LoginRequest;

    // Replace with real auth logic / DB check
    if (username === "admin" && password === "secret") {
      return new Response(JSON.stringify({ token: "fake-jwt-token" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response(JSON.stringify({ error: "Invalid credentials" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
};
