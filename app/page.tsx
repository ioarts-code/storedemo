'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { HygraphConfig, Product, Category } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS, GET_CATEGORIES, SEARCH_PRODUCTS } from '@/lib/graphql-queries';
import { ConfigPanel } from '@/components/config-panel';
import { ServiceGrid } from '@/components/service-grid';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { HeroLeftColumn } from '@/components/hero-left-column';
import { FeaturedProduct } from '@/components/featured-product';

export default function Home() {
  const [config, setConfig] = useState<HygraphConfig | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [configOpen, setConfigOpen] = useState(false);

  // Load config from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hygraph-config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed);
      } catch {
        console.log('[v0] Failed to parse saved config');
      }
    }
  }, []);

  const handleConfigSaved = (newConfig: HygraphConfig) => {
    setConfig(newConfig);
    localStorage.setItem('hygraph-config', JSON.stringify(newConfig));
    setConfigOpen(false);
  };
    if (!config) return;

    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient(config);

      // Fetch products
      const productsData = await client.request<{ products: Product[] }>(
        GET_PRODUCTS
      );
      const allProducts = productsData.products;
      
      // Find featured product
      const featured = allProducts.find((p) => p.slug === 'elden-vector');
      setFeaturedProduct(featured || null);
      
      // Set remaining products
      setProducts(allProducts);
    } catch (err) {
      let message = err instanceof Error ? err.message : 'Failed to fetch data';
      
      // Detect schema errors
      if (message.includes('field') && message.includes('not defined')) {
        const match = message.match(/field '([^']+)'/);
        const fieldName = match ? match[1] : 'unknown field';
        message = `Hygraph schema missing required model: "${fieldName}". Please create this model in your Hygraph dashboard. See SETUP_CHECKLIST.md for step-by-step instructions.`;
      } else if (message.includes('401') || message.includes('Unauthorized')) {
        message = 'Invalid API token or endpoint. Check your configuration.';
      } else if (message.includes('404') || message.includes('Not Found')) {
        message = 'API endpoint not found. Verify your Hygraph endpoint URL.';
      }
      
      setError(message);
      console.error('[v0] Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  // Fetch data when config changes
  useEffect(() => {
    if (config) {
      fetchData();
    }
  }, [config, fetchData]);

  // Filter products, excluding featured product
  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.slug !== 'elden-vector');
  }, [products]);

  return (
    <main className="min-h-screen bg-white flex flex-col">
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
          <div className="flex-1 bg-black flex items-center justify-center">
            <p className="text-white">Featured product loading...</p>
          </div>
        )}
      </div>

      {/* Products Section - White background */}
      <div className="bg-white w-full">
        <div className="w-full px-0 py-0 relative">
          {/* Settings Button */}
          <button
            onClick={() => setConfigOpen(true)}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Configure Hygraph API"
          >
            <Settings className="w-5 h-5 text-gray-700" />
          </button>

          {!config ? (
            // Setup state
            <div className="text-center py-20">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-8 max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                  Setup Required
                </h2>
                <p className="text-slate-600 mb-6">
                  Click the settings icon to configure your Hygraph API endpoint
                  and start displaying products.
                </p>
                <Button onClick={() => setConfigOpen(true)} size="lg">
                  Configure Now
                </Button>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-900 font-semibold mb-2">Configuration Issue</p>
                  <p className="text-red-700 text-sm mb-4">{error}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setConfigOpen(true)}
                      className="text-red-700 border-red-300"
                    >
                      Update Config
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        // Trigger retry
                        setError('');
                        fetchData();
                      }}
                      className="text-red-700"
                    >
                      Retry
                    </Button>
                  </div>
                </div>
              )}

              {/* Product Grid */}
              <ServiceGrid
                services={filteredProducts}
                isLoading={isLoading && products.length === 0}
                isEmpty={!isLoading && filteredProducts.length === 0}
              />
            </>
          )}
        </div>
      </div>

      {/* Config Panel Modal */}
      <ConfigPanel
        onConfigSaved={handleConfigSaved}
        initialConfig={config || undefined}
        isOpen={configOpen}
        onOpenChange={setConfigOpen}
      />
    </main>
  );
}
