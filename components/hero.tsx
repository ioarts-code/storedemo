'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';

interface HeroProps {
  bgPositionX?: number; // Background horizontal position in percentage (0-100)
  bgPositionY?: number; // Background vertical position in percentage (0-100)
  showFeaturedCard?: boolean; // Show featured card overlay
  featuredCardSlug?: string; // Featured product slug
  featuredCardPositionTop?: string; // Featured card top position
  featuredCardPositionRight?: string; // Featured card right position
}

export default function Hero({ 
  bgPositionX = 50, 
  bgPositionY = 10,
  showFeaturedCard = true,
  featuredCardSlug = 'hoodie-elden',
  featuredCardPositionTop = '80px',
  featuredCardPositionRight = '80px',
}: HeroProps) {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [featuredCardLoading, setFeaturedCardLoading] = useState(true);

  useEffect(() => {
    const fetchHoodie = async () => {
      try {
        const client = createHygraphClient();
        const data = await client.request<{ products: Product[] }>(
          GET_PRODUCT_BY_SLUG,
          { slug: 'hoodie-elden' }
        );

        const product = data?.products?.[0];
        if (product?.images?.[0]?.url) {
          setBackgroundImage(product.images[0].url);
        }
      } catch (error) {
        console.error('Failed to fetch hoodie product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHoodie();
  }, []);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      if (!showFeaturedCard) {
        setFeaturedCardLoading(false);
        return;
      }

      try {
        const client = createHygraphClient();
        const data = await client.request<{ products: Product[] }>(
          GET_PRODUCT_BY_SLUG,
          { slug: featuredCardSlug }
        );

        const product = data?.products?.[0];
        if (product) {
          setFeaturedProduct(product);
        }
      } catch (error) {
        console.error('Failed to fetch featured product:', error);
      } finally {
        setFeaturedCardLoading(false);
      }
    };

    fetchFeaturedProduct();
  }, [showFeaturedCard, featuredCardSlug]);

  return (
    <div className="relative h-[900px] flex items-start justify-center overflow-hidden w-screen">
      {/* Background image */}
      <img
        alt="Hoodie Elden"
        src={backgroundImage}
        className="absolute inset-0 w-full h-full bg-transparent object-cover scale-100 opacity-100 pointer-events-none"
        style={{
          objectPosition: `${bgPositionX}% ${bgPositionY}%`,
        }}
      />

      {/* Horizontal Stripe Divider - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full bg-[rgba(255,255,255,0.95)] pointer-events-none"
        style={{
          height: '120px',
        }}
      >
        {/* Stripe Content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-4">
          {/* Merch Text */}
          <div 
            className="font-['Inter:Bold',sans-serif] font-bold uppercase text-black text-center"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.1',
              letterSpacing: '2px',
            }}
          >
            Merch
          </div>
          
          {/* Taglines */}
          <div 
            className="font-['Inter:Bold',sans-serif] font-bold text-black text-center"
            style={{ 
              fontSize: '11px',
              lineHeight: '1.4',
              letterSpacing: '-0.24px',
            }}
          >
            <p>ILLUSTRATIONS THAT MAKE SENSE. FIND NEW DIGITAL ART</p>
            <p>{`LET'S MAKE EVERY PRODUCT YOURS FOR REAL.`}</p>
          </div>
          
          {/* Artist Name */}
          <div 
            className="mt-1"
            style={{ 
              fontFamily: "'Mr Dafoe', cursive",
              fontSize: '14px',
              color: '#000',
            }}
          >
            Anders Altmann
          </div>
        </div>
      </div>

      {/* Featured Card Overlay */}
      {showFeaturedCard && (
        <>
          {featuredCardLoading ? (
            <div 
              className="absolute bg-[rgba(255,255,255,0.2)] rounded-[6px] animate-pulse"
              style={{
                top: featuredCardPositionTop,
                right: featuredCardPositionRight,
                width: '800px',
                height: '220px',
              }}
            />
          ) : featuredProduct ? (
            <div 
              className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start pb-[32px] pl-[27px] pr-[16px] pt-[31px] relative rounded-[6px] w-[800px]"
              style={{
                top: featuredCardPositionTop,
                right: featuredCardPositionRight,
              }}
            >
              <div aria-hidden="true" className="absolute border-l-3 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />

              {/* Badge */}
              <div className="content-stretch flex items-start mb-[-0.6px] pb-[5px] pt-[6px] px-[16px] relative rounded-[33554400px] shrink-0">
                <div aria-hidden="true" className="absolute border-3 border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
                <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e0e0e0] text-[11.6px] tracking-[-0.18px] whitespace-nowrap">
                  <p className="leading-[14.4px]">Top Pick</p>
                </div>
              </div>

              {/* Title */}
              <div className="content-stretch flex flex-col items-start mb-[-0.6px] pb-[3px] pt-[19.6px] relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-0.36px] w-full line-clamp-2">
                  <p className="leading-[41px]">{featuredProduct.name}</p>
                </div>
              </div>

              {/* Description */}
              <div className="content-stretch flex flex-col items-start mb-[-0.6px] pb-[19.6px] relative shrink-0 w-full">
                <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-white tracking-[-0.21px] w-full line-clamp-2">
                  <p className="leading-[16.8px]">{featuredProduct.description}</p>
                </div>
              </div>

              {/* Button */}
              <Link href={`/products/${featuredProduct.slug}`}>
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
          ) : null}
        </>
      )}
    </div>
  );
}
