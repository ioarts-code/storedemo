'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { StoreInfo } from '@/components/StoreInfo';

interface HeroFeaturedProps {
  name?: string;
  description?: string;
  image?: string;
  slug?: string;
  isLoading?: boolean;
  hideProductCard?: boolean;
  hideImage?: boolean;
}

export function HeroFeatured({
  name = 'Elden Hoodie',
  description = '',
  image,
  slug,
  isLoading = false,
  hideProductCard = false,
  hideImage = false,
}: HeroFeaturedProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full min-h-[900px] 2xl:min-h-[400px] overflow-hidden flex items-center justify-center bg-[#05050500] border-white/10">
            <div className="font-['Inter:Extra_Bold',sans-serif] font-extrabold text-white text-[16px] uppercase">
              Etsyasdad
            </div>
      </div>
    
  );
}
