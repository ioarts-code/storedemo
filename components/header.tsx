'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const { state } = useCart();
  const cartItemCount = state.items.length;

  return (
    <header className="bg-white h-[50px] w-full sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto h-full relative">
        {/* Logo */}
        <Link href="/" className="absolute h-[48px] left-[44px] top-[0px] overflow-clip hover:opacity-80 transition-opacity">
          <p className="font-bold leading-[normal] text-black text-[38.4px] whitespace-nowrap">
            IOARTS
          </p>
        </Link>

        {/* Navigation */}
        <nav className="absolute font-bold leading-[0] right-[28px] rounded-[4px] tracking-[-0.24px] uppercase px-[12px] flex items-center gap-[16px] top-1/2 -translate-y-1/2">
          <Link
            href="/"
            className="text-[13.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-black"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[13.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-black"
          >
            Shop All
          </Link>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="relative text-[13.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-black flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2-9m-10 9v2m10-2v2"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
