import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Read env vars inside the handler so they are always fresh after a reload.
  // Prefer the private server-only names; fall back to NEXT_PUBLIC_ variants
  // so existing deployments keep working during migration.
  const ENDPOINT =
    process.env.HYGRAPH_ENDPOINT ||
    process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ||
    'https://eu-west-2.cdn.hygraph.com/content/cmpjovcr70si407l7900pduzc/master';
  const AUTH_TOKEN =
    process.env.HYGRAPH_AUTH_TOKEN || process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

  try {
    if (!ENDPOINT) {
      return NextResponse.json(
        {
          error:
            'Hygraph configuration missing. Set HYGRAPH_ENDPOINT or NEXT_PUBLIC_HYGRAPH_ENDPOINT in your environment.',
        },
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

    const contentType = response.headers.get('content-type') || '';
    let data: unknown;

    if (contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      data = { error: `Non-JSON response from Hygraph: ${text}` };
    }

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
