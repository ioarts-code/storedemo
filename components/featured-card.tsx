'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';

interface FeaturedCardProps {
  productSlug?: string;
  badge?: string;
  positionTop?: string;
  positionLeft?: string;
}

export default function FeaturedCard({
  productSlug = 'hoodie-elden',
  badge = 'Top Pick',
  positionTop = '80px',
  positionLeft = '60px',
}: FeaturedCardProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      try {
        const client = createHygraphClient();
        const data = await client.request<{ products: Product[] }>(
          GET_PRODUCT_BY_SLUG,
          { slug: productSlug }
        );

        const fetchedProduct = data?.products?.[0];
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error('Failed to fetch featured product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProduct();
  }, [productSlug]);

  if (isLoading) {
    return (
      <div 
        className="absolute bg-[rgba(255,255,255,0.2)] rounded-[6px] animate-pulse"
        style={{
          top: positionTop,
          left: positionLeft,
          width: '400px',
          height: '220px',
        }}
      />
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div 
      className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start pb-[32px] pl-[27px] pr-[16px] pt-[31px] relative rounded-[6px] w-[400px]"
      style={{
        top: positionTop,
        left: positionLeft,
      }}
    >
      <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />

      {/* Badge */}
      <div className="content-stretch flex items-start mb-[-0.6px] pb-[5px] pt-[6px] px-[16px] relative rounded-[33554400px] shrink-0">
        <div aria-hidden="true" className="absolute border-3 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
        <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[11.6px] tracking-[-0.18px] whitespace-nowrap">
          <p className="leading-[14.4px]">{badge}</p>
        </div>
      </div>

      {/* Title */}
      <div className="content-stretch flex flex-col items-start mb-[-0.6px] pb-[3px] pt-[19.6px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.36px] w-full line-clamp-2">
          <p className="leading-[41px]">{product.name}</p>
        </div>
      </div>

      {/* Description */}
      <div className="content-stretch flex flex-col items-start mb-[-0.6px] pb-[19.6px] relative shrink-0 w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-white tracking-[-0.21px] w-full line-clamp-2">
          <p className="leading-[16.8px]">{product.description}</p>
        </div>
      </div>

      {/* Button */}
      <Link href={`/products/${product.slug}`}>
        <div className="content-stretch flex items-center justify-center px-[48px] py-[15px] relative rounded-[6px] shrink-0 w-[201px] cursor-pointer hover:opacity-80 transition-opacity">
          <div aria-hidden="true" className="absolute border-3 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[20px] text-center tracking-[-0.36px] uppercase whitespace-nowrap">
                <p className="leading-[28.8px]">Shop</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
