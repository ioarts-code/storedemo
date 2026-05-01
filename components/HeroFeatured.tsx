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
  name = 'Elden Hoodie',
  description = '',
  image,
  slug,
  isLoading = false,
}: HeroFeaturedProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full min-h-[900px] 2xl:min-h-[400px] overflow-hidden flex items-center justify-center bg-[#05050500] border-white/10">
      {/* Background product image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#05050500]">
        {image && !imageError ? (
          // show full image without cropping to remove top cutoff
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain object-center scale-[2.0]"
            priority
            onError={() => setImageError(true)}
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-[#0f0f0f]" />
        )}
      </div>

      <div className="relative z-10 flex w-full max-w-[2400px] items-stretch gap-6 px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 pb-8 pt-8">
        {/* Left column — StoreInfo with top/bottom breathing room */}
        <div className="relative z-10 flex-shrink-0 basis-[320px] md:basis-[360px] lg:basis-[400px] xl:basis-[460px] 2xl:basis-[520px] flex items-start">
          <div className="w-full max-w-[460px]">
            <StoreInfo />
          </div>
        </div>

        <div className="flex-1" />

        {/* Featured product card — right center */}
        <div className="absolute z-10 top-[15%] right-4 md:right-10 lg:right-14 xl:right-20 w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] xl:w-[600px] bg-[rgba(255,255,255,0.16)] border border-white/10 px-6 py-6 flex flex-col items-start gap-6">
          {/* Left white accent border */}
          <div aria-hidden="true" className="absolute border-l-[3px] border-solid border-white inset-0 pointer-events-none" />

          {/* Top Pick badge */}
          <div className="relative z-10 flex items-center py-1 px-3 bg-transparent rounded-full border-[2px] border-white shrink-0">
            <span className="font-bold text-[#e0e0e0] text-[10px] md:text-[11px] tracking-[-0.18px] capitalize leading-[14px]">
              Top Pick
            </span>
          </div>

          {/* Product name */}
          <h3 className="relative z-10 font-bold text-[22px] md:text-[26px] xl:text-[30px] text-white uppercase tracking-[-0.24px] leading-[28px] md:leading-[34px] w-full">
            {isLoading ? 'Loading...' : name}
          </h3>

          {/* Description */}
          <p className="relative z-10 mt-[-12px] text-[12px] md:text-[13px] xl:text-[14px] text-white/90 tracking-[-0.08px] leading-[18px] md:leading-[22px] font-normal w-full line-clamp-4">
            {description ? (description.length > 125 ? description.slice(0, 125) + '...' : description) : 'No description available.'}
          </p>

          {/* Shop button */}
          {slug && (
            <Link
              href={`/products/${slug}`}
              className="relative z-10 flex items-center justify-center px-16 py-2 rounded-[4px] border-[2px] bg-transparent border-white hover:bg-black transition-colors duration-200"
            >
              <span className="font-bold text-white text-[13px] md:text-[14px] tracking-[-0.2px] uppercase leading-5">
                Shop
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
