'use client';

import Link from 'next/link';
import { StripeProvider } from '@/components/stripe-provider';
import { CheckoutForm } from '@/components/checkout-form';
import { useCart } from '@/lib/cart-context';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const { state } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      if (state.items.length === 0) {
        setError('Cart is empty');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: state.total,
            email: '',
            metadata: { itemCount: state.items.length },
          }),
        });

        const data = await response.json();
        console.log('[v0] Checkout response:', { status: response.status, data });
        
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error('[v0] No clientSecret in response:', data);
          setError(data.error || 'Failed to initialize payment');
        }
      } catch (err) {
        console.error('[v0] Checkout request error:', err);
        setError('Failed to create payment intent');
      } finally {
        setIsLoading(false);
      }
    };

    createPaymentIntent();
  }, [state.items, state.total]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Initializing checkout...</p>
        </div>
      </main>
    );
  }

  if (error || !clientSecret) {
    return (
      <main className="min-h-screen bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <Link href="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base">
            ← Back to Cart
          </Link>
          <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
            {error || 'Failed to load checkout'}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base">
            ← Back to Cart
          </Link>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-4xl md:text-6xl lg:text-[80px] text-white uppercase tracking-tight">
            Checkout
          </h1>
        </div>

        {/* Checkout Form */}
        <StripeProvider clientSecret={clientSecret}>
          <CheckoutForm />
        </StripeProvider>
      </div>
    </main>
  );
}
