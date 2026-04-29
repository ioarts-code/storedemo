'use client';

import Link from 'next/link';

interface GridInfoCardProps {
  name: string;
  slug: string;
}

export function GridInfoCard({ name, slug }: GridInfoCardProps) {
  return (
    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 z-10">
      <div className="bg-[rgba(255,255,255,0.2)] py-2 sm:py-2.5 px-2.5 sm:px-3 rounded-[4px] sm:rounded-[6px] flex items-center justify-between gap-2 border border-transparent hover:border-white/40 transition-colors duration-200">
        {/* Product Name */}
        <p className="font-bold text-[11px] sm:text-[12px] md:text-[13px] text-white tracking-[0.5px] leading-[16px] flex-1 min-w-0 line-clamp-2">
          {name}
        </p>

        {/* Shop Button */}
        <Link
          href={`/products/${slug}`}
          className="bg-[rgba(232,232,232,0.9)] py-1.5 sm:py-2 px-3 sm:px-4 rounded-[4px] sm:rounded-[6px] border-2 border-white/80 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-200 shrink-0 group"
        >
          <span className="font-bold text-[10px] sm:text-[11px] md:text-[13px] tracking-[-0.2px] uppercase whitespace-nowrap group-hover:scale-105 transition-transform">
            Shop
          </span>
        </Link>
      </div>
    </div>
  );
}
