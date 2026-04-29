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
      className="flex min-h-screen w-full"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col justify-between w-[40%] p-12">
        {/* Product Content */}
        <div className="flex flex-col gap-4">
          {/* Title and Price */}
          <div className="flex flex-col gap-0">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[128px] text-white tracking-[4.1px] uppercase leading-none">
              {product.name}
            </h1>

            {/* Price */}
            <div
              className="font-['Roboto:SemiBold',sans-serif] font-semibold text-[96px] text-white"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {product.price ? `$${product.price}` : 'Contact for price'}
            </div>
          </div>

          {/* Description */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[1.5] max-w-[640px]">
            {product.description}
          </p>

          {/* Etsy Button */}
          <a
            href="#"
            className="bg-transparent h-[45px] rounded-[6px] w-[176px] hover:bg-white/10 transition-colors relative flex items-center justify-center"
          >
            <div
              aria-hidden="true"
              className="absolute border-2 border-white border-solid inset-0 pointer-events-none rounded-[6px]"
            />
            <div className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-white text-[16px] uppercase">
              Etsy
            </div>
          </a>

          {/* Category */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.9px] text-[#6f8298] tracking-[-0.24px] px-[0px] pt-[11px] pb-[0px]">
            Category: {category}
          </p>

          {/* Copyright */}
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.8px] text-[#6f8298] tracking-[-0.24px]">
            Copyright: {copyright}
          </p>
        </div>

        {/* Shop Section - Bottom Left */}
        <div className="flex flex-col gap-5 text-white mt-12">
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[19.7px] tracking-[-0.3px]">
            Shop
          </h2>
          <div className="font-['Inter:Regular',sans-serif] font-normal flex flex-col gap-2">
            <p className="text-[14.9px] leading-[20px]">Deviant Vectors</p>
            <p className="text-[15px] leading-[20px]">Etsy Products</p>
          </div>
        </div>
      </div>

      {/* Right Column - Product Image */}
      <div className="w-[60%] flex items-center justify-center p-4">
        {imageUrl ? (
          <Image
            alt={product.name}
            className="w-full h-auto object-contain max-h-[1200px] mx-[0px] mt-[-201px] mb-[0px]"
            src={imageUrl}
            width={800}
            height={1200}
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <div className="text-gray-500 text-center">No image available</div>
        )}
      </div>
    </div>
  );
}
