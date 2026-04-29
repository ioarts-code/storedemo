'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


interface ServiceGridProps {
  services: Product[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

function ServiceCard({ service }: { service: Product }) {
  const firstImage = service.images?.[0]?.url;
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/products/${service.slug}`} className="block w-full">
      <div className="relative w-full aspect-[3/4] overflow-hidden cursor-pointer bg-[#1a1a1a] border-2 border-[#2a2a2a] hover:border-white transition-colors duration-200">
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
        {/* Info Card */}
        <div className="absolute bottom-4 left-4 right-4 w-[300px] bg-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 flex items-center justify-between gap-3 border border-[rgba(255,255,255,0.2)]">
          <p className="text-white font-bold text-sm truncate flex-1">
            {service.name}
          </p>
          <Link href={`/products/${service.slug}`} className="bg-transparent border-2 border-white text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-white hover:text-black transition-colors shrink-0">
            SHOP
          </Link>
        </div>
      </div>
    </Link>
  );
}

export function ServiceGrid({
  services,
  isLoading = false,
  isEmpty = false,
}: ServiceGridProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-gray-400">Loading products...</div>
      </div>
    );
  }

  if (isEmpty || services.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
