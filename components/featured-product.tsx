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
      {/* Product Image - takes up full space */}
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
    </div>
  );
}
