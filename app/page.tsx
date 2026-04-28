'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS } from '@/lib/graphql-queries';
import { ServiceGrid } from '@/components/service-grid';
import { HeroLeftColumn } from '@/components/hero-left-column';
import { FeaturedProduct } from '@/components/featured-product';
import { ConfigDialog } from '@/components/config-dialog';
import { Settings } from 'lucide-react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [configOpen, setConfigOpen] = useState(false);
  const [config, setConfig] = useState<{ endpoint: string; token: string } | null>(null);

  // Load saved configuration from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hygraph-config');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Fetch products from Hygraph
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient(config || undefined);
      const productsData = await client.request<{ products: Product[] }>(
        GET_PRODUCTS
      );
      const allProducts = productsData.products;

      // Find featured product
      const featured = allProducts.find((p) => p.slug === 'elden-vector');
      setFeaturedProduct(featured || null);

      // Set all products
      setProducts(allProducts);
    } catch (err) {
      let message = err instanceof Error ? err.message : 'Failed to fetch data';

      if (message.includes('endpoint and token must be configured')) {
        message = 'API not configured. Click the settings icon to configure.';
        setConfigOpen(true);
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
  }, [config]);

  // Fetch data when config changes
  useEffect(() => {
    fetchData();
  }, [config, fetchData]);

  const handleConfigSave = (endpoint: string, token: string) => {
    const newConfig = { endpoint, token };
    setConfig(newConfig);
    localStorage.setItem('hygraph-config', JSON.stringify(newConfig));
    setConfigOpen(false);
  };

  // Filter products, excluding featured product
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.slug !== 'elden-vector');
  }, [products]);

  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      {/* Hero Section with two columns - Fixed height 1282px */}
      <div className="flex w-full h-[1282px] overflow-clip">
        {/* Left Column */}
        <HeroLeftColumn />

        {/* Right Column - Featured Product */}
        {featuredProduct ? (
          <div className="flex-1">
            <FeaturedProduct
              label="Top Pick"
              name={featuredProduct.name}
              description={featuredProduct.description}
              image={featuredProduct.images?.[0]?.url}
              slug={featuredProduct.slug}
            />
          </div>
        ) : (
          <div className="flex-1 bg-transparent flex items-center justify-center">
            <p className="text-white">
              {isLoading ? 'Featured product loading...' : 'Featured product not found'}
            </p>
          </div>
        )}
      </div>

      {/* Products Section - Transparent */}
      <div className="bg-transparent w-full">
        <div className="w-full px-0 py-0 relative">
          {/* Settings Button */}
          {!config && (
            <button
              onClick={() => setConfigOpen(true)}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded transition-colors font-medium text-sm"
            >
              <Settings className="w-4 h-4" />
              Configure API
            </button>
          )}

          {error && (
            <div className="mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center">
              <p className="text-red-400 font-semibold mb-2">API Error</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Product Grid */}
          <ServiceGrid
            services={filteredProducts}
            isLoading={isLoading && products.length === 0}
            isEmpty={!isLoading && filteredProducts.length === 0}
          />
        </div>
      </div>

      {/* Config Dialog */}
      <ConfigDialog
        isOpen={configOpen}
        onClose={() => setConfigOpen(false)}
        onSave={handleConfigSave}
      />
    </main>
  );
}
