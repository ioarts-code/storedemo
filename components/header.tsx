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
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 4V3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v1h5.7c.46 0 .88.37.97.83l.3 2.65c.13 1.23-.98 2.52-2.27 2.52H6.27c-1.29 0-2.4-1.29-2.27-2.52l.3-2.65C4.4 4.37 4.82 4 5.3 4H7zm10 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9-5H8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1z" />
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
