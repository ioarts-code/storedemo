'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      <div className="h-[50px] mobile:h-[45px] tablet:h-[50px] desktop:h-[50px] w-full max-w-[1920px] mx-auto relative">
        {/* Logo */}
        <Link href="/" className="absolute h-full left-[20px] mobile:left-[16px] tablet:left-[44px] top-0 flex items-center overflow-clip hover:opacity-80 transition-opacity">
          <p className="font-bold leading-[normal] text-black mobile:text-[24px] tablet:text-[32px] desktop:text-[38.4px] whitespace-nowrap">
            IOARTS
          </p>
        </Link>

        {/* Navigation */}
        <nav className="absolute font-bold right-[16px] mobile:right-[16px] tablet:right-[28px] desktop:right-[28px] top-1/2 -translate-y-1/2 tracking-[-0.24px] uppercase px-[8px] tablet:px-[12px] flex items-center gap-[12px] tablet:gap-[16px]">
          <Link
            href="/"
            className="mobile:text-[11px] tablet:text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-black"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="mobile:text-[11px] tablet:text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-black"
          >
            Shop All
          </Link>
        </nav>
      </div>
    </header>
  );
}
