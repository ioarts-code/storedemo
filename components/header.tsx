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
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 2h12v3H6V2z" fill="currentColor" />
              <path d="M5 5h14l-1.5 12c-.2 1.5-1.6 2.5-3.1 2.5H9.6c-1.5 0-2.9-1-3.1-2.5L5 5z" fill="currentColor" />
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
