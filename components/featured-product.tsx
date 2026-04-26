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
  name = 'Elden Vector',
  description = 'Introducing a vector image for flexible use. They were individually created and vectorized. What You Get: High resolution files for your websites or create a custom painted gaming',
  image = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hygraph_start-XWq9wmFpjvxWGYrP85wilBbqMHLQXD.png',
  slug = 'elden-vector',
}: FeaturedProductProps) {
  return (
    <div className="flex-1 bg-black flex flex-col relative overflow-hidden">
      {/* Product Image - takes up upper portion */}
      <div className="flex-1 relative flex items-center justify-center p-8">
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

      {/* Product Info Section */}
      <div className="bg-[#404040] px-12 py-8 min-h-[180px] flex flex-col justify-between">
        {/* Label and Title */}
        <div>
          {label && (
            <p className="text-xs font-bold text-white tracking-widest mb-2 uppercase">
              {label}
            </p>
          )}
          <h2 className="text-xl font-bold text-white mb-3">{name}</h2>
          <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Shop Button - positioned absolutely on left bottom */}
      <Link
        href={`/products/${slug}`}
        className="absolute bottom-8 left-12 border-2 border-white px-6 py-2 text-white font-bold text-xs hover:bg-white hover:text-black transition-colors uppercase"
      >
        SHOP
      </Link>
    </div>
  );
}
