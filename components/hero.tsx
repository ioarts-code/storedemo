'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';

interface HeroProps {
  showFeaturedCard?: boolean; // Show featured card overlay
  featuredCardSlug?: string; // Featured product slug
}

// Helper function to truncate text to 60 characters
const truncateDescription = (text: string, maxLength: number = 60): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export default function Hero({
  showFeaturedCard = true,
  featuredCardSlug = 'hoodie-elden',
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
          console.log('[v0] Background image URL:', product.images[0].url);
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
    <div className="relative lg:h-[1000px] mobile:h-[600px] flex items-start justify-center overflow-hidden w-screen">
      {/* Background image - hidden on screens smaller than 1024px */}
      <img
        alt="Hoodie Elden"
        src={backgroundImage}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none lg:block"
      />

      {/* Horizontal Stripe Divider - Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full bg-[rgba(255,255,255,0.95)] pointer-events-none"
        style={{
          height: '160px',
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
            <p>ILLUSTRATIONS THAT MAKE SENSE. FIND NEW ART WITH IOARTSEU</p>
            <p>{`LET'S MAKE EVERY PRODUCT YOURS FOR REAL.`}</p>
          </div>

          {/* Artist Name */}
          <div
            className="mt-1"
            style={{
              fontFamily: "'Mr Dafoe', cursive",
              fontSize: '16px',
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
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:top-20 lg:left-auto lg:right-20 lg:translate-y-0 lg:translate-x-0 w-96 h-56 bg-white/20 rounded-lg animate-pulse" />
          ) : featuredProduct ? (
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:top-20 lg:left-auto lg:right-20 lg:translate-y-0 lg:translate-x-0 flex flex-col items-start p-8 w-96 bg-white/20 rounded-lg gap-4 z-10">
              <div className="absolute border-l-3 border-white inset-0 pointer-events-none rounded-lg" />

              {/* Badge */}
              <div className="flex items-center px-4 py-1 border-2 border-white rounded-full">
                <span className="text-xs font-bold text-white uppercase tracking-tight">Top Pick</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white leading-tight line-clamp-2">
                {featuredProduct.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-white leading-relaxed line-clamp-2">
                {truncateDescription(featuredProduct.description)}
              </p>

              {/* Button */}
              <Link
                href={`/products/${featuredProduct.slug}`}
                className="flex items-center justify-center px-12 py-3 border-3 border-white rounded-lg text-white font-bold uppercase hover:opacity-80 transition-opacity"
              >
                Shop
              </Link>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
