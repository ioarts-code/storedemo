'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-green-500/20 border border-green-500 rounded-full mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-4xl md:text-6xl lg:text-[80px] text-white uppercase tracking-tight mb-4">
            Order Confirmed
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-2">
            Thank you for your purchase!
          </p>

          {orderId && (
            <p className="text-gray-500 text-sm md:text-base">
              Order ID: <span className="font-mono text-gray-400">{orderId}</span>
            </p>
          )}
        </div>

        {/* Details */}
        <div className="bg-white/5 border border-gray-700 rounded-lg p-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Next Steps</h2>
              <p className="text-gray-400">
                A confirmation email will be sent to your email address shortly with your order details and tracking information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white mb-2">Need Help?</h2>
              <p className="text-gray-400">
                If you have any questions about your order, please contact us at support@ioarts.ink
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-white text-black font-bold text-center rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back to Home
          </Link>

          <Link
            href="/"
            className="px-8 py-3 border-2 border-white text-white font-bold text-center rounded-lg hover:bg-white/10 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0F0F0F]" />}>
      <SuccessContent />
    </Suspense>
  );
}
