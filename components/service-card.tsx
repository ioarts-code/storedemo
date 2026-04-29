'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GridInfoCard } from './GridInfoCard';

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
        <GridInfoCard name={service.name} slug={service.slug} />
      </div>
    </Link>
  );
}
