'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

export function CheckoutForm() {
  const router = useRouter();
  const { state, dispatch } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('SE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (state.items.length === 0) {
      setErrorMessage('Cart is empty');
      return;
    }

    if (!fullName || !email || !address || !city || !postalCode) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      setSuccessMessage('Demo purchase completed successfully.');
      setIsProcessing(false);
      router.push(`/checkout/success?orderId=DEMO123`);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Address *
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
              placeholder="123 Main Street"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              City *
            </label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
              placeholder="Stockholm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Postal Code *
            </label>
            <input
              type="text"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
              placeholder="10123"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Payment Information</h2>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Card Details *
          </label>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              required
              inputMode="numeric"
              placeholder="Card number"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="MM / YY"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
            />
            <input
              type="text"
              required
              inputMode="numeric"
              placeholder="CVC"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Billing postal code"
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-white focus:outline-none"
            />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            This is a demo payment form. No live Stripe or PayPal processing occurs.
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
          {successMessage}
        </div>
      )}

      <div className="bg-white/5 border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Order Summary</h3>
        <div className="space-y-2 pb-4 border-b border-gray-700 mb-4">
          {state.items.map((item) => (
            <div key={item.product.id} className="flex justify-between text-gray-300">
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-white">Total</span>
          <span className="text-2xl font-bold text-white">
            ${state.total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
      >
        {isProcessing ? 'Processing...' : `Complete Demo Purchase`}
      </button>

      <div className="flex justify-center">
        <Link href="/cart" className="text-gray-400 hover:text-white transition-colors">
          ← Back to Cart
        </Link>
      </div>
    </form>
  );
}
