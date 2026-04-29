'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HeroProps {
  name?: string;
  description?: string;
  image?: string;
  slug?: string;
  isLoading?: boolean;
}

export function Hero({
  name = 'Metroid Larva Pixel motif',
  description,
  image,
  slug,
  isLoading = false,
}: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image from CMS */}
      {image && !imageError ? (
        <Image
          src={image}
          alt={name}
          fill
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          priority
          onError={() => setImageError(true)}
          unoptimized
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-[#0f0f0f]" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#f5f5f5] tracking-[-0.24px] uppercase leading-[36px] mb-[48px] text-[36px] text-balance">
            HOLA,<br />
            HERE COMES OUR NEW MERCH.<br />
            <br />
            ENJOY!
          </h1>

          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.8px] tracking-[-0.24px] leading-[19.2px] text-[#ffffff] mb-[24px]">
            ILLUSTRATIONS THAT MAKE SENSE.<br />
            WHAT ABOUT DIGITAL ART?<br />
            LET&apos;S MAKE EVERY PRODUCT YOURS FOR REAL.
          </p>

          <div className="flex gap-[8px] mt-[16px] justify-center">
            <a
              href="#"
              className="bg-transparent rounded-[6px] size-[48px] border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Visit DeviantArt"
            >
              <svg className="size-[24px]" fill="none" viewBox="0 0 15 24">
                <path
                  d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
                  className="fill-white group-hover:fill-[#0f0f0f] transition-colors"
                />
              </svg>
            </a>
            <a
              href="#"
              className="bg-transparent rounded-[6px] size-[48px] border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
              aria-label="Shop on Etsy"
            >
              <span className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-white group-hover:text-[#0f0f0f] transition-colors">
                E
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Black bar at bottom */}
      <div className="absolute bottom-0 h-[20px] w-full bg-[#0F0F0F]" />
    </div>
  );
}
