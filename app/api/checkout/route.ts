import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Demo route: Stripe API disabled for demo checkout.
    return NextResponse.json({
      clientSecret: 'demo',
      paymentIntentId: 'demo-intent',
    });
  } catch (error) {
    console.error('[v0] Demo checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Demo checkout failed: ${errorMessage}` },
      { status: 500 }
    );
  }
}
