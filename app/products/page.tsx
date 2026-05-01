'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS } from '@/lib/graphql-queries';
import { Grid } from '@/components/grid';
import { HeroFeatured } from '@/components/HeroFeatured';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient();
      const data = await client.request<{ products: Product[] }>(GET_PRODUCTS);
      const allProducts = data.products;

      const featured =
        allProducts.find((p) => p.slug === 'hoodie-elden') ||
        allProducts.find((p) => p.images && p.images.length > 0) ||
        allProducts[0] ||
        null;

      setFeaturedProduct(featured || null);
      setProducts(allProducts);
    } catch (err) {
      let message = err instanceof Error ? err.message : 'Failed to fetch data';

      if (message.includes('field') && message.includes('not defined')) {
        const match = message.match(/field '([^']+)'/);
        const fieldName = match ? match[1] : 'unknown field';
        message = `Hygraph schema missing: "${fieldName}"`;
      } else if (message.includes('401') || message.includes('Unauthorized')) {
        message = 'Invalid API token. Check your Vercel environment variables.';
      } else if (message.includes('404') || message.includes('Not Found')) {
        message = 'API endpoint not found. Verify NEXT_PUBLIC_HYGRAPH_ENDPOINT.';
      }

      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // desktop-lg+: exclude featured from grid
  const filteredProducts = useMemo(
    () => products.filter((p) => p.slug !== featuredProduct?.slug),
    [products, featuredProduct]
  );

  // tablet + below desktop-lg: featured goes into grid, StoreInfo hero shown
  const tabletProducts = useMemo(() => {
    if (!featuredProduct) return products;
    const without = products.filter((p) => p.slug !== featuredProduct.slug);
    return [featuredProduct, ...without];
  }, [products, featuredProduct]);

  // mobile: all products including featured, no hero
  const mobileProducts = useMemo(() => {
    if (!featuredProduct) return products;
    const without = products.filter((p) => p.slug !== featuredProduct.slug);
    return [featuredProduct, ...without];
  }, [products, featuredProduct]);

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {error && (
        <div className="p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center mx-4 mt-8">
          <p className="text-red-400 font-semibold mb-2">API Error</p>
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* desktop-lg+: full HeroFeatured with product card */}
      <div className="hidden desktop-lg:block">
        <HeroFeatured
          name={featuredProduct?.name}
          description={featuredProduct?.description}
          image={featuredProduct?.images?.[0]?.url}
          slug={featuredProduct?.slug}
          isLoading={isLoading}
        />
        <Grid
          products={filteredProducts}
          isLoading={isLoading && products.length === 0}
          isEmpty={!isLoading && filteredProducts.length === 0}
        />
      </div>

      {/* tablet → below desktop-lg: StoreInfo only, featured pushed into grid */}
      <div className="hidden tablet:block desktop-lg:hidden">
        <HeroFeatured
          name={featuredProduct?.name}
          description={featuredProduct?.description}
          image={featuredProduct?.images?.[0]?.url}
          slug={featuredProduct?.slug}
          isLoading={isLoading}
          hideProductCard
        />
        <Grid
          products={tabletProducts}
          isLoading={isLoading && products.length === 0}
          isEmpty={!isLoading && tabletProducts.length === 0}
        />
      </div>

      {/* mobile: no hero, all products in grid */}
      <div className="block tablet:hidden">
        <Grid
          products={mobileProducts}
          isLoading={isLoading && products.length === 0}
          isEmpty={!isLoading && mobileProducts.length === 0}
        />
      </div>
    </div>
  );
}
