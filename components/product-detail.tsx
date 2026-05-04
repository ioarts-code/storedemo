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
      className="flex flex-col mobile:flex-col tablet:flex-col desktop:flex-row min-h-screen w-full"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgb(15, 15, 15) 0%, rgb(15, 15, 15) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* Left Column */}
      <div className="flex flex-col justify-between mobile:w-full tablet:w-full desktop:w-[55%] mobile:p-4 tablet:p-8 desktop:p-12 bg-transparent">
        {/* Product Content */}
        <div className="flex flex-col gap-4">
          {/* Title and Price */}
          <div className="flex flex-col gap-0">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold mobile:text-[48px] tablet:text-[72px] desktop:text-[128px] text-white mobile:tracking-[1.5px] tablet:tracking-[2.3px] desktop:tracking-[4.1px] uppercase leading-none">
              {product.name}
            </h1>

            {/* Price */}
            <div
              className="font-['Roboto:SemiBold',sans-serif] font-semibold mobile:text-[36px] tablet:text-[56px] desktop:text-[96px] text-white"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {product.price ? `$${product.price}` : 'Contact for price'}
            </div>
          </div>

          {/* Description */}
          <p className="font-['Inter:Regular',sans-serif] font-normal mobile:text-[14px] tablet:text-[15px] desktop:text-[16px] text-white mobile:leading-[1.4] tablet:leading-[1.5] desktop:leading-[1.5] max-w-[640px]">
            {product.description}
          </p>

          {/* Etsy Button */}
          <a
            href="https://www.etsy.com/shop/ioarts"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent mobile:mt-4 tablet:mt-[10px] desktop:mt-[10px] mobile:h-[40px] tablet:h-[45px] desktop:h-[45px] rounded-[6px] mobile:w-[140px] tablet:w-[160px] desktop:w-[176px] hover:bg-white/30 transition-colors relative flex items-center justify-center"
          >
            <div
              aria-hidden="true"
              className="absolute border-2 border-white border-solid inset-0 pointer-events-none rounded-[6px]"
            />
            <div className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-white mobile:text-[14px] tablet:text-[15px] desktop:text-[16px] uppercase">
              Etsy
            </div>
          </a>

          {/* Category */}
          <p className="font-['Inter:Regular',sans-serif] font-normal mobile:text-[12px] tablet:text-[14px] desktop:text-[14.9px] text-gray-400 tracking-[-0.24px] mobile:mt-3 tablet:mt-[20px] desktop:mt-[20px] mobile:pt-2 tablet:pt-[11px] desktop:pt-[11px] pb-[0px]">
            Category: {category}
          </p>

          {/* Copyright */}
          <p className="font-['Inter:Regular',sans-serif] font-normal mobile:text-[11px] tablet:text-[13px] desktop:text-[14.8px] text-gray-400 tracking-[-0.24px]">
            Copyright: {copyright}
          </p>
        </div>
      </div>

      {/* Right Column - Product Image */}
      <div className="mobile:w-full tablet:w-full desktop:w-[45%] flex items-center justify-center mobile:p-4 tablet:p-6 desktop:pr-8 mobile:min-h-[300px] tablet:min-h-[400px] desktop:min-h-screen">
        {imageUrl ? (
          <Image
            alt={product.name}
            className="object-contain object-center mobile:scale-100 tablet:scale-125 desktop:scale-[1.8]"
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
