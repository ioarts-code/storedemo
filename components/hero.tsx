'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';

interface HeroProps {
  bgPositionX?: number; // Background horizontal position in percentage (0-100)
  stripeScale?: number; // Diagonal stripe scale (default 1, can be 0.5, 1, 1.5, etc.)
}

export default function Hero({ bgPositionX = 50, stripeScale = 1 }: HeroProps) {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Stripe dimensions (scalable)
  const stripeWidth = 100; // Full width percentage
  const stripeHeight = 120 * stripeScale; // Vertical height that scales
  const textSize = Math.floor(24 * stripeScale);

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

  // Responsive positioning logic
  const getResponsivePosition = () => {
    if (typeof window === 'undefined') return 0;
    return 0; // Always top-left for the diagonal stripe
  };

  const responsivePosition = typeof window !== 'undefined' ? getResponsivePosition() : 0;

  return (
    <div className="relative h-[900px] flex items-start justify-center overflow-hidden w-screen">
      {/* Background image */}
      <img
        alt="Hoodie Elden"
        src={backgroundImage}
        className="absolute inset-0 w-full h-full bg-neutral-900 object-cover scale-100 opacity-100 pointer-events-none"
        style={{
          objectPosition: `${bgPositionX}% center`,
        }}
      />

      {/* Horizontal Stripe Divider - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full bg-[rgba(255,255,255,0.95)] pointer-events-none"
        style={{
          height: `${stripeHeight}px`,
          transform: 'translateY(0deg)',
        }}
      >
        {/* Stripe Content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-8 py-4">
          {/* Merch Text */}
          <div 
            className="font-['Inter:Bold',sans-serif] font-bold uppercase text-black text-center"
            style={{ 
              fontSize: `${textSize}px`,
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
              fontSize: `${Math.floor(11 * stripeScale)}px`,
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
              fontSize: `${Math.floor(14 * stripeScale)}px`,
              color: '#000',
            }}
          >
            Anders Altmann
          </div>
        </div>
      </div>
    </div>
  );
}
