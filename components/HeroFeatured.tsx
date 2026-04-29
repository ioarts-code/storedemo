'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { StoreInfo } from '@/components/StoreInfo';

interface HeroFeaturedProps {
  name?: string;
  description?: string;
  image?: string;
  slug?: string;
  isLoading?: boolean;
}

export function HeroFeatured({
  name = 'Metroid Larva Pixel motif',
  description = '',
  image,
  slug,
  isLoading = false,
}: HeroFeaturedProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-stretch">
      {/* Background product image */}
      <div className="absolute inset-0 z-0">
        {image && !imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center"
            priority
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-[#0f0f0f]" />
        )}
      </div>

      {/* Left column — StoreInfo with top/bottom breathing room */}
      <div className="relative z-10 w-[280px] shrink-0 flex items-center py-16">
        <div className="w-full h-[420px]">
          <StoreInfo />
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Featured product card — bottom right */}
      <div className="absolute z-10 bottom-10 right-4 w-[380px] bg-[rgba(255,255,255,0.2)] rounded-[6px] px-5 pt-5 pb-5 flex flex-col items-start gap-3">
        {/* Left white accent border */}
        <div aria-hidden="true" className="absolute border-l-[3px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />

        {/* Top Pick badge */}
        <div className="flex items-center py-0.5 px-3 rounded-full border-2 border-[#e0e0e0] shrink-0">
          <span className="font-bold text-[#e0e0e0] text-[10px] tracking-[-0.18px] capitalize leading-[14px]">
            Top Pick
          </span>
        </div>

        {/* Product name */}
        <h3 className="font-bold text-[20px] text-white tracking-[-0.24px] leading-[26px] w-full">
          {isLoading ? 'Loading...' : name}
        </h3>

        {/* Description */}
        <p className="text-[11px] text-white tracking-[-0.1px] leading-[16px] font-normal w-full line-clamp-3">
          {description || 'No description available.'}
        </p>

        {/* Shop button */}
        {slug && (
          <Link
            href={`/products/${slug}`}
            className="flex items-center justify-center px-8 py-2 rounded-[6px] border-2 border-[#e0e0e0] hover:bg-white/10 transition-colors"
          >
            <span className="font-bold text-[#e0e0e0] text-[13px] tracking-[-0.2px] uppercase leading-5">
              Shop
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
