'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface FeaturedProductProps {
  label?: string;
  name?: string;
  description?: string;
  image?: string;
  slug?: string;
}

export function FeaturedProduct({
  label = 'Top Pick',
  name = 'Metroid Larva Pixel motif',
  description = 'This is a **Fan-made** product Description: Introducing a vector image for flexibel use. They were individually created and vectorized. What You Get : .PNG, .EPS, .SVG format or any format you like. What You Can Do: Use it for your websites or create a custom painted gaming',
  image,
  slug = 'metroid-larva-pixel',
}: FeaturedProductProps) {
  const [imageError, setImageError] = useState(false);
  
  // Truncate description to 200 characters
  const truncatedDescription = description && description.length > 200 
    ? description.substring(0, 200) + '...' 
    : description;

  return (
    <div className="relative w-full h-[1272px] overflow-clip bg-transparent">
      {/* Product Image - full container */}
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
        <div className="absolute inset-0 w-full h-full bg-transparent flex items-center justify-center">
          <p className="text-gray-400">[Image Loading...]</p>
        </div>
      )}

      {/* Product Info Section - positioned at bottom */}
      <div className="absolute bottom-[160px] left-[80px] right-[80px]">
        <div className="rounded-[6px] mx-[0px] mt-[15px] mb-[157px] px-[16px] pt-[15px] pb-[32px] bg-[#ffffff33]">
          {label && (
            <div className="rounded-full px-[16px] py-[4px] inline-block mx-[0px] my-[16px] bg-[#ffffff]">
              <p className="font-['Inter:Bold',sans-serif] font-bold text-[11.6px] tracking-[-0.18px] leading-[14.4px] capitalize text-[#000000]">
                {label}
              </p>
            </div>
          )}

          <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[23.4px] tracking-[-0.36px] leading-[28.8px] px-[0px] py-[3px] text-[#ffffff]">
            {name}
          </h3>

          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13.2px] tracking-[-0.21px] leading-[16.8px] mx-[0px] mt-[0px] mb-[19px] text-[#ffffff]">
            {truncatedDescription}
          </p>

          <button className="border-2 border-black rounded-[6px] hover:bg-black hover:text-white transition-colors px-[45px] py-[12px] bg-[#ffffff]">
            <span className="font-['Inter:Bold',sans-serif] font-bold text-[20px] tracking-[-0.36px] uppercase leading-[28.8px]">
              Shop
            </span>
          </button>
        </div>
      </div>

      {/* Black bar underneath */}
      <div className="absolute bottom-0 h-[20px] w-full bg-[#0F0F0F]"></div>
    </div>
  );
}
