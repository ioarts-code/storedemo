'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';

interface FeaturedCardProps {
  productSlug?: string; // Slug of product to feature (can be set via props)
  badge?: string; // Custom badge text (default: "Top Pick")
  positionTop?: string; // Top position (e.g., "60px", "10%") - default: "80px"
  positionLeft?: string; // Left position (e.g., "40px", "5%") - default: "60px"
}

export default function FeaturedCard({ 
  productSlug = 'hoodie-elden', 
  badge = 'Top Pick',
  positionTop = '80px',
  positionLeft = '60px',
}: FeaturedCardProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProduct = async () => {
      try {
        const client = createHygraphClient();
        const data = await client.request<{ products: Product[] }>(
          GET_PRODUCT_BY_SLUG,
          { slug: productSlug }
        );

        if (data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        }
      } catch (error) {
        console.error('Failed to fetch featured product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProduct();
  }, [productSlug]);

  if (isLoading) {
    return (
      <div className="w-[742px] h-[250px] bg-white rounded-lg animate-pulse" />
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div 
      className="absolute flex flex-col items-start p-8 w-[742px] bg-white rounded-lg gap-4 z-10 shadow-lg"
      style={{
        top: positionTop,
        left: positionLeft,
      }}
    >
      {/* Badge */}
      <div className="px-4 py-1 bg-black rounded-full">
        <span className="text-white font-bold text-xs uppercase tracking-tight">
          {badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-black leading-tight">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-black leading-relaxed line-clamp-3">
        {product.description}
      </p>

      {/* Shop Button */}
      <Link
        href={`/products/${product.slug}`}
        className="mt-auto px-12 py-3 bg-black text-white font-bold text-lg uppercase rounded-lg hover:bg-gray-800 transition-colors"
      >
        Shop
      </Link>
    </div>
  );
}
