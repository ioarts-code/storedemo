'use client';

import Link from 'next/link';

export default function Header() {
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
        </nav>
      </div>
    </header>
  );
}
