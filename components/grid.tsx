'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/lib/types';

interface GridItemProps {
  product: Product;
}

function GridItem({ product }: GridItemProps) {
  const imageSrc = product.images?.[0]?.url;
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="content-stretch flex flex-col h-[615px] items-center justify-end justify-self-stretch overflow-clip pb-[87px] pt-[453px] relative shrink-0 cursor-pointer">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {imageSrc && !imageError ? (
            <Image
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
              src={imageSrc}
              width={800}
              height={1200}
              onError={() => setImageError(true)}
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-transparent" />
          )}
        </div>

        <div className="content-stretch flex flex-col items-start max-w-[400px] relative shrink-1 w-[400px]">
          <div className="bg-[rgba(255,255,255,0.2)] h-[75px] min-h-[75px] relative rounded-[6px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />

            <div className="absolute bottom-[38%] content-stretch flex flex-col items-start left-[24px] max-w-[1056px] top-[38%]">
              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[0.5px] whitespace-nowrap">
                <p className="leading-[18px]">{product.name}</p>
              </div>
            </div>

            <div className="absolute bottom-[18%] content-stretch flex flex-col items-start right-[16px] top-[18%]">
              <div className="content-stretch flex h-[48px] items-center justify-center p-[3px] relative rounded-[6px] shrink-0 w-[106px] bg-transparent hover:bg-black transition-colors duration-200 cursor-pointer">
                <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
                <div className="relative shrink-0">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[-0.36px] uppercase whitespace-nowrap">
                      <p className="leading-[28.8px]">Shop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

interface GridProps {
  products: Product[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

export function Grid({ products, isLoading = false, isEmpty = false }: GridProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-gray-400">Loading products...</div>
      </div>
    );
  }

  if (isEmpty || products.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-lg font-semibold text-white mb-2">No products found</h3>
        <p className="text-gray-400">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  // Group products by category
  const groupedByCategory = products.reduce(
    (acc, product) => {
      const categoryName = product.categories?.[0]?.name || 'Uncategorized';
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );

  const categoryEntries = Object.entries(groupedByCategory);

  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative size-full py-16 gap-16">
      {categoryEntries.map(([categoryName, categoryProducts]) => (
        <div key={categoryName} className="w-full">
          {/* Category Title */}
          <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[32px] text-white tracking-[-0.64px] mb-8 block desktop:block tablet:hidden mobile:hidden">
            {categoryName}
          </h2>

          {/* Category Grid - 1 per row on desktop, responsive on smaller screens */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 w-full">
            {categoryProducts.map((product) => (
              <GridItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
