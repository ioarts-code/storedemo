import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
    const authToken = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

    if (!endpoint || !authToken) {
      return NextResponse.json(
        { error: 'Hygraph configuration missing. Check environment variables.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { query, variables } = body;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
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
