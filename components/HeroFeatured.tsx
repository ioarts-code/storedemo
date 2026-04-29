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
    <div className="relative w-full h-[1014px] overflow-hidden flex items-stretch">
      {/* Background product image */}
      <div className="absolute inset-0 z-0">
        {image && !imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
            priority
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-[#0f0f0f]" />
        )}
      </div>

      {/* Left column — StoreInfo */}
      <div className="relative z-10 w-[537px] shrink-0">
        <StoreInfo />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Featured product card — bottom right */}
      <div className="absolute z-10 bottom-[60px] right-[16px] w-[560px] bg-[rgba(255,255,255,0.2)] rounded-[6px] px-[27px] pt-[31px] pb-[33px] flex flex-col items-start">
        {/* Left white accent border */}
        <div aria-hidden="true" className="absolute border-l-[3px] border-solid border-white inset-0 pointer-events-none rounded-[6px]" />

        {/* Top Pick badge */}
        <div className="flex items-center mb-0 pb-1 pt-1.5 px-4 rounded-full border-[3px] border-[#e0e0e0] shrink-0">
          <span className="font-bold text-[#e0e0e0] text-[11.6px] tracking-[-0.18px] capitalize leading-[14.4px]">
            Top Pick
          </span>
        </div>

        {/* Product name */}
        <div className="pt-5 pb-0.5 w-full">
          <h3 className="font-bold text-[36px] text-white tracking-[-0.36px] leading-[41px]">
            {isLoading ? 'Loading...' : name}
          </h3>
        </div>

        {/* Description */}
        <div className="pb-5 w-full">
          <p className="text-[13.2px] text-white tracking-[-0.21px] leading-[16.8px] font-normal">
            {description || 'No description available.'}
          </p>
        </div>

        {/* Shop button */}
        {slug && (
          <Link
            href={`/products/${slug}`}
            className="flex items-center justify-center px-12 py-[15px] rounded-[6px] border-[3px] border-[#e0e0e0] w-[201px] hover:bg-white/10 transition-colors"
          >
            <span className="font-bold text-[#e0e0e0] text-[20px] tracking-[-0.36px] uppercase leading-[28.8px]">
              Shop
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
