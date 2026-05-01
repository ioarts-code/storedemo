import { NextRequest, NextResponse } from 'next/server';

// Prefer the private server-only token. Fall back to the NEXT_PUBLIC_ variant
// so existing deployments keep working during migration.
const ENDPOINT =
  process.env.HYGRAPH_ENDPOINT || process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
const AUTH_TOKEN =
  process.env.HYGRAPH_AUTH_TOKEN || process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

export async function POST(request: NextRequest) {
  try {
    if (!ENDPOINT) {
      return NextResponse.json(
        { error: 'Hygraph configuration missing. Check environment variables.' },
        { status: 500 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Request body must be an object.' }, { status: 400 });
    }

    const { query, variables } = body as Record<string, unknown>;

    // Basic validation — query must be a non-empty string.
    if (typeof query !== 'string' || query.trim() === '') {
      return NextResponse.json(
        { error: 'A non-empty "query" string is required.' },
        { status: 400 }
      );
    }

    // Only allow read (query) operations — no mutations via this proxy.
    const trimmed = query.trim().toLowerCase();
    if (!trimmed.startsWith('query')) {
      return NextResponse.json(
        { error: 'Only read queries are permitted via this endpoint.' },
        { status: 403 }
      );
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (AUTH_TOKEN) {
      headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    }

    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Hygraph request failed: ${message}` },
      { status: 500 }
    );
  }
}
