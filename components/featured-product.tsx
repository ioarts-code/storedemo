'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FeaturedProductProps {
  label?: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export function FeaturedProduct({
  label = 'Top Pick',
  name,
  description,
  image,
  slug,
}: FeaturedProductProps) {
  return (
    <div className="h-screen bg-black flex flex-col relative overflow-hidden">
      {/* Product Image */}
      <div className="flex-1 relative flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Product Info Section */}
      <div className="bg-[#404040] px-12 py-8 min-h-[200px] flex flex-col justify-between">
        {/* Top - Label and Title */}
        <div>
          {label && (
            <p className="text-sm font-bold text-white tracking-wider mb-2">
              {label}
            </p>
          )}
          <h2 className="text-2xl font-bold text-white mb-4">{name}</h2>
          <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Shop Button - positioned absolutely on left */}
      <Link
        href={`/products/${slug}`}
        className="absolute bottom-8 left-12 border-2 border-white px-8 py-3 text-white font-bold text-sm hover:bg-white hover:text-black transition-colors"
      >
        SHOP
      </Link>
    </div>
  );
}
