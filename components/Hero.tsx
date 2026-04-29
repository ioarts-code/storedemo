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
          {/* Hero content removed */}
        </div>
      </div>

      {/* Black bar at bottom */}
      <div className="absolute bottom-0 h-[20px] w-full bg-[#0F0F0F]" />
    </div>
  );
}
