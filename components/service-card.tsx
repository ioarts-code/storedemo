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
      <div className="relative w-full h-[615px] overflow-clip cursor-pointer">
        {/* Product Image */}
        {firstImage && (
          <Image
            src={firstImage}
            alt={service.name}
            fill
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}

        {/* Info Section - Light gray background at bottom */}
        <div className="absolute bottom-[87px] left-[49px] right-[81px]">
          <div className="bg-[#d9d9d9] min-h-[75px] py-[14px] relative rounded-[6px] flex items-center px-[16px]">
            <div className="absolute left-[24px] top-1/2 -translate-y-1/2 font-['Inter:Bold',sans-serif] font-bold text-[14px] text-black tracking-[0.5px] leading-[18px] max-w-[55%]">
              <p className="leading-[18px]">{service.name}</p>
            </div>

            <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
              <button className="bg-[#e8e8e8] h-[48px] rounded-[6px] w-[106px] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] tracking-[-0.36px] uppercase leading-[28.8px]">
                  Shop
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Black bar underneath */}
        <div className="absolute bottom-0 h-[20px] w-full bg-black"></div>
      </div>
    </Link>
  );
}
