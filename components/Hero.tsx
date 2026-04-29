'use client';

import Image from 'next/image';
import { useState } from 'react';
import { StoreInfo } from './StoreInfo';

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
      {/* Two-column layout */}
      <div className="flex w-full h-full">
        {/* Left Column - Store Info */}
        <div className="w-1/2 flex flex-col">
          <StoreInfo />
        </div>

        {/* Right Column - Featured Product Image */}
        <div className="w-1/2 relative overflow-hidden bg-[#0f0f0f]">
          {image && !imageError ? (
            <Image
              src={image}
              alt={name}
              fill
              className="w-full h-full object-cover"
              priority
              onError={() => setImageError(true)}
              unoptimized
            />
          ) : (
            <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
              <p className="text-gray-400">{isLoading ? 'Loading...' : 'No image'}</p>
            </div>
          )}
        </div>
      </div>

      {/* Black bar at bottom */}
      <div className="absolute bottom-0 h-5 w-full bg-[#0F0F0F]" />
    </div>
  );
}
