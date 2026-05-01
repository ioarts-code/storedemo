'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS } from '@/lib/graphql-queries';
import { Grid } from '@/components/grid';
import { HeroFeatured } from '@/components/HeroFeatured';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products from Hygraph
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient();
      const productsData = await client.request<{ products: Product[] }>(
        GET_PRODUCTS
      );
      const allProducts = productsData.products;

      // Find featured product
      const featured =
        allProducts.find((p) => p.slug === 'hoodie-elden') ||
        allProducts.find((p) => p.images && p.images.length > 0) ||
        allProducts[0] ||
        null;
      setFeaturedProduct(featured || null);

      // Set all products
      setProducts(allProducts);
    } catch (err) {
      let message = err instanceof Error ? err.message : 'Failed to fetch data';

      if (message.includes('endpoint must be configured')) {
        message = 'Hygraph environment variables are missing. Set NEXT_PUBLIC_HYGRAPH_ENDPOINT and optionally NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN.';
      } else if (message.includes('field') && message.includes('not defined')) {
        const match = message.match(/field '([^']+)'/);
        const fieldName = match ? match[1] : 'unknown field';
        message = `Hygraph schema missing: "${fieldName}"`;
      } else if (message.includes('401') || message.includes('Unauthorized')) {
        message = 'Invalid API token. Check your configuration.';
      } else if (message.includes('404') || message.includes('Not Found')) {
        message = 'API endpoint not found. Verify your configuration.';
      }

      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter products, excluding featured product
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.slug !== featuredProduct?.slug);
  }, [products, featuredProduct]);

  // On mobile, include featured product in the grid
  const mobileProducts = useMemo(() => {
    if (!featuredProduct) return products;
    const withoutFeatured = products.filter((p) => p.slug !== featuredProduct.slug);
    return [featuredProduct, ...withoutFeatured];
  }, [products, featuredProduct]);

  // On tablet+below desktop-lg, include featured product in the grid
  const tabletProducts = useMemo(() => {
    if (!featuredProduct) return products;
    const withoutFeatured = products.filter((p) => p.slug !== featuredProduct.slug);
    return [featuredProduct, ...withoutFeatured];
  }, [products, featuredProduct]);

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* desktop-lg+: Full featured product hero */}
      <div className="hidden desktop-lg:block">
        <HeroFeatured
          name={featuredProduct?.name}
          description={featuredProduct?.description}
          image={featuredProduct?.images?.[0]?.url}
          slug={featuredProduct?.slug}
          isLoading={isLoading}
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
          hideImage
        />
      </div>

      <div className="bg-transparent w-full tablet:mt-16">
        <div className="w-full max-w-[2400px] mx-auto px-0 relative">
          {error && (
            <div className="mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center mx-6">
              <p className="text-red-400 font-semibold mb-2">API Error</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Product Grid - on mobile shows all products including featured */}
          <div className="block tablet:hidden">
            <Grid
              products={mobileProducts}
              isLoading={isLoading && products.length === 0}
              isEmpty={!isLoading && mobileProducts.length === 0}
            />
          </div>

          {/* tablet → below desktop-lg: featured in grid + StoreInfo hero */}
          <div className="hidden tablet:block desktop-lg:hidden">
            <Grid
              products={tabletProducts}
              isLoading={isLoading && products.length === 0}
              isEmpty={!isLoading && tabletProducts.length === 0}
            />
          </div>

          {/* desktop-lg+: featured card shown, excluded from grid */}
          <div className="hidden desktop-lg:block">
            <Grid
              products={filteredProducts}
              isLoading={isLoading && products.length === 0}
              isEmpty={!isLoading && filteredProducts.length === 0}
            />
          </div>
        </div>
      </div>

    </main>
  );
}
