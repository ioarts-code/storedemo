'use client';

import { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  service: Product;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const firstImage = service.images?.[0]?.url;

  return (
    <Link href={`/products/${service.slug}`}>
      <div className="flex flex-col cursor-pointer">
        {/* Product Image */}
        {firstImage && (
          <div className="relative w-full aspect-square bg-black overflow-hidden">
            <Image
              src={firstImage}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Info Section - Light gray background */}
        <div className="bg-[#d0d0d0] px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-black">{service.name}</h3>
          <Link
            href={`/products/${service.slug}`}
            className="border-2 border-black px-4 py-1 text-black font-bold text-xs hover:bg-black hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            SHOP
          </Link>
        </div>

        {/* Black bar underneath */}
        <div className="h-3 bg-black"></div>
      </div>
    </Link>
  );
}
