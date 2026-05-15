'use client';

import { Product, ProductImage } from '@/lib/types';
import { useState } from 'react';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const imageUrl = product.images?.[0]?.url || '';
  const category = product.categories?.[0]?.name || 'Product';
  const copyright = 'Unofficial: Rightsholder permits fanart on merch in small scale';

  return (
    <div
      className="flex flex-col lg:flex-row min-h-screen w-full gap-6 lg:gap-0"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col justify-between w-full lg:w-[55%] p-4 sm:p-6 md:p-8 lg:p-12 bg-transparent">
        {/* Product Content */}
        <div className="flex flex-col gap-4">
          {/* Title and Price */}
          <div className="flex flex-col gap-0">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[128px] text-white tracking-tighter lg:tracking-[4.1px] uppercase leading-none">
              {product.name}
            </h1>

            {/* Price */}
            <div
              className="font-['Roboto:SemiBold',sans-serif] font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-[96px] text-white"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {product.price ? `$${product.price}` : 'Contact for price'}
            </div>
          </div>

          {/* Description */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-sm sm:text-base text-white leading-[1.5] max-w-[640px]">
            {product.description}
          </p>

          {/* Etsy Button - Split Design */}
          <a
            href="https://www.etsy.com/shop/ioartseu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 lg:mt-[10px] h-10 sm:h-11 lg:h-[45px] w-48 sm:w-56 lg:w-[280px] relative flex overflow-hidden rounded-lg lg:rounded-[6px] group hover:shadow-lg transition-shadow"
          >
            {/* Diagonal divider SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 280 45"
              preserveAspectRatio="none"
            >
              <polygon points="0,0 140,45 280,45 280,0" fill="white" />
              <polygon points="0,0 140,45 140,45 0,45" fill="black" />
            </svg>

            {/* Etsy - White background, black text (Left) */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-black text-xs sm:text-sm lg:text-[16px] uppercase">
                Etsy
              </span>
            </div>

            {/* Shop Now - Black background, white text (Right) */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <span className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-white text-xs sm:text-sm lg:text-[16px] uppercase">
                Shop Now
              </span>
            </div>
          </a>

          {/* Category */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-xs sm:text-sm text-gray-400 tracking-tight lg:tracking-[-0.24px] mt-4 lg:mt-[20px] pt-2 lg:pt-[11px] pb-0">
            Category: {category}
          </p>

          {/* Copyright */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-xs sm:text-sm text-gray-400 tracking-tight lg:tracking-[-0.24px]">
            Copyright: {copyright}
          </p>
        </div>
      </div>

      {/* Right Column - Product Image */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-4 lg:p-4 lg:pr-8 order-first lg:order-last">
        {imageUrl ? (
          <Image
            alt={product.name}
            className="object-contain object-center max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-none lg:scale-[1.8]"
            src={imageUrl}
            width={900}
            height={1200}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 45vw"
          />
        ) : (
          <div className="text-gray-500 text-center">No image available</div>
        )}
      </div>
    </div>
  );
}
