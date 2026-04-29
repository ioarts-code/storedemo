'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceCardProps {
  service: Product;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const firstImage = service.images?.[0]?.url;
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/products/${service.slug}`} className="block w-full">
      <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-white transition-colors duration-200">
        {/* Product Image */}
        {firstImage && !imageError ? (
          <Image
            src={firstImage}
            alt={service.name}
            fill
            className="object-cover pointer-events-none"
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500 text-sm">[Image]</p>
          </div>
        )}

        {/* Info Section */}
        <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4">
          <div className="bg-[#d9d9d9] py-3 px-3 sm:px-4 relative rounded-[6px] flex items-center justify-between gap-2 border-2 border-transparent">
            <p className="font-bold text-[12px] sm:text-[13px] text-black tracking-[0.5px] leading-[18px] flex-1 min-w-0 line-clamp-2">
              {service.name}
            </p>

            <button className="bg-[#e8e8e8] h-10 sm:h-11 rounded-[6px] w-[80px] sm:w-[96px] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shrink-0">
              <span className="font-bold text-[13px] sm:text-[15px] tracking-[-0.2px] uppercase">
                Shop
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
