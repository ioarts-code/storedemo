'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#d9d9d9] h-[64px] w-full sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto h-full relative">
        {/* Logo */}
        <Link href="/" className="absolute h-[48px] left-[44px] top-[8px] overflow-clip hover:opacity-80 transition-opacity">
          <p className="font-bold leading-[normal] text-[#0f0f0f] text-[38.4px] whitespace-nowrap">
            IOARTS
          </p>
        </Link>

        {/* Navigation */}
        <nav className="absolute backdrop-blur-[6px] bg-[#959595] font-bold h-[32px] leading-[0] right-[28px] rounded-[4px] top-[16px] tracking-[-0.24px] uppercase px-[12px] flex items-center gap-[16px]">
          <Link
            href="/"
            className="text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]"
          >
            Shop All
          </Link>
          <a
            href="#"
            className="text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]"
          >
            Dev
          </a>
        </nav>
      </div>
    </header>
  );
}
