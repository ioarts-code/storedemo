'use client';

import Link from 'next/link';
import { CheckoutForm } from '@/components/checkout-form';
import { useCart } from '@/lib/cart-context';

export default function CheckoutPage() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <main className="min-h-screen bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          <Link href="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base">
            ← Back to Cart
          </Link>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500 rounded-lg text-yellow-300">
            Your cart is empty. Add items to continue to the demo checkout.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-12">
          <Link href="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm md:text-base">
            ← Back to Cart
          </Link>
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-4xl md:text-6xl lg:text-[80px] text-white uppercase tracking-tight">
            Checkout
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-400">
            Demo checkout mode: this page displays a card entry form for preview only. No live Stripe or PayPal payment processing is performed.
          </p>
        </div>

        <CheckoutForm />
      </div>
    </main>
  );
}
