'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FeaturedProductProps {
  label?: string;
  name?: string;
  description?: string;
  image?: string;
  slug?: string;
}

export function FeaturedProduct({
  label = 'Top Pick',
  name = 'Metroid Larva Pixel motif',
  description = 'This is a **Fan-made** product Description: Introducing a vector image for flexibel use. They were individually created and vectorized. What You Get : .PNG, .EPS, .SVG format or any format you like. What You Can Do: Use it for your websites or create a custom painted gaming',
  image = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hygraph_start-P7IousmrjWQjcHVNIhzPstbxU28N0D.png',
  slug = 'metroid-larva-pixel',
}: FeaturedProductProps) {
  return (
    <div className="flex-1 bg-black flex flex-col relative overflow-hidden">
      {/* Product Image - takes up most of the space */}
      <div className="flex-1 relative flex items-center justify-center p-8 pb-0">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Product Info Section - Light gray at bottom */}
      <div className="bg-[#d0d0d0] px-8 py-6 flex flex-col gap-4">
        {/* Label */}
        {label && (
          <span className="inline-flex items-center bg-blue-300 text-black px-3 py-1 rounded-full text-xs font-bold w-fit">
            {label}
          </span>
        )}
        
        {/* Title */}
        <h2 className="text-lg font-bold text-black">{name}</h2>
        
        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Shop Button */}
        <Link
          href={`/products/${slug}`}
          className="border-2 border-black px-6 py-2 text-black font-bold text-sm hover:bg-black hover:text-white transition-colors uppercase w-fit"
        >
          SHOP
        </Link>
      </div>
    </div>
  );
}
