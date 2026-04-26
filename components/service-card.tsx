'use client';

import { Product } from '@/lib/types';
import Link from 'next/link';

interface ServiceCardProps {
  service: Product;
  size?: 'normal' | 'large';
}

export function ServiceCard({ service, size = 'normal' }: ServiceCardProps) {
  const firstImage = service.images?.[0]?.url || '/placeholder-image.png';
  const isLarge = size === 'large';

  if (!isLarge) {
    return (
      <Link href={`/products/${service.slug}`}>
        <div className="relative w-full h-[615px] overflow-clip cursor-pointer group">
          <img
            src={firstImage}
            alt={service.name}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:opacity-90 transition-opacity"
          />

          <div className="absolute bottom-[87px] left-[49px] right-[81px]">
            <div className="bg-[#d9d9d9] min-h-[75px] py-[14px] relative rounded-[6px] flex items-center px-[16px]">
              <div className="absolute left-[24px] top-1/2 -translate-y-1/2 font-bold text-[14px] text-black tracking-[0.5px] leading-[18px] max-w-[55%]">
                <p className="leading-[18px] line-clamp-3">{service.name}</p>
              </div>

              <div className="absolute right-[16px] top-1/2 -translate-y-1/2">
                <button className="bg-[#e8e8e8] h-[48px] rounded-[6px] w-[106px] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <p className="font-bold text-[20px] tracking-[-0.36px] uppercase leading-[28.8px]">
                    Shop
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${service.slug}`}>
      <div className="relative w-full h-[1272px] overflow-clip rounded-[6px] cursor-pointer group">
        <img
          src={firstImage}
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:opacity-90 transition-opacity"
        />

        <div className="absolute bottom-[160px] left-[80px] right-[80px]">
          <div className="rounded-[6px] mx-[0px] mt-[15px] mb-[157px] px-[16px] pt-[15px] pb-[32px] bg-[#ffffff33]">
            {service.categories && service.categories.length > 0 && (
              <div className="rounded-full px-[16px] py-[4px] inline-block mx-[0px] my-[16px] bg-[#ffffff]">
                <p className="font-bold text-[11.6px] tracking-[-0.18px] leading-[14.4px] capitalize text-[#000000]">
                  {service.categories[0].name}
                </p>
              </div>
            )}

            <h3 className="font-bold text-[23.4px] tracking-[-0.36px] leading-[28.8px] px-[0px] py-[3px] text-[#ffffff]">
              {service.name}
            </h3>

            <p className="font-normal text-[13.2px] tracking-[-0.21px] leading-[16.8px] mx-[0px] mt-[0px] mb-[19px] text-[#ffffff] line-clamp-4">
              {service.description}
            </p>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-[20px] font-bold text-[#ffffff]">${service.price}</span>
            </div>

            <button className="border-2 border-black rounded-[6px] hover:bg-black hover:text-white transition-colors px-[45px] py-[12px] bg-[#ffffff]">
              <span className="font-bold text-[20px] tracking-[-0.36px] uppercase leading-[28.8px]">Shop</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
