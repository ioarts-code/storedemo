'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { HygraphConfig, Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS } from '@/lib/graphql-queries';
import { ServiceGrid } from '@/components/service-grid';
import { HeroLeftColumn } from '@/components/hero-left-column';
import { FeaturedProduct } from '@/components/featured-product';
import { ConfigModal } from '@/components/config-modal';
import { Settings } from 'lucide-react';

export default function Home() {
  const [config, setConfig] = useState<HygraphConfig | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [configOpen, setConfigOpen] = useState(false);

  const handleConfigSaved = (newConfig: HygraphConfig) => {
    setConfig(newConfig);
    localStorage.setItem('hygraph-config', JSON.stringify(newConfig));
    setConfigOpen(false);
  };
  useEffect(() => {
    // Check for environment variables first
    const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
    const authToken = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;
    
    console.log('[v0] Config load attempt - Endpoint:', endpoint ? '✓' : '✗', 'Token:', authToken ? '✓' : '✗');
    
    if (endpoint && authToken) {
      const config: HygraphConfig = { endpoint, authToken };
      setConfig(config);
      localStorage.setItem('hygraph-config', JSON.stringify(config));
      console.log('[v0] Config loaded from env vars');
      return;
    }
    
    // Fall back to localStorage
    const saved = localStorage.getItem('hygraph-config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setConfig(parsed);
        console.log('[v0] Config loaded from localStorage');
      } catch {
        console.log('[v0] Failed to parse saved config');
      }
    } else {
      console.log('[v0] No config found');
    }
  }, []);

  // Fetch products from Hygraph
  const fetchData = useCallback(async () => {
    if (!config) {
      console.log('[v0] No config, skipping fetch');
      return;
    }

    console.log('[v0] Fetching products...');
    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient(config);
      const productsData = await client.request<{ products: Product[] }>(
        GET_PRODUCTS
      );
      const allProducts = productsData.products;
      console.log('[v0] Fetched products:', allProducts.length);
      
      // Find featured product
      const featured = allProducts.find((p) => p.slug === 'elden-vector');
      setFeaturedProduct(featured || null);
      
      // Set all products
      setProducts(allProducts);
    } catch (err) {
      let message = err instanceof Error ? err.message : 'Failed to fetch data';
      console.log('[v0] Fetch error:', message);
      
      if (message.includes('field') && message.includes('not defined')) {
        const match = message.match(/field '([^']+)'/);
        const fieldName = match ? match[1] : 'unknown field';
        message = `Hygraph schema missing required model: "${fieldName}". Please create this model in your Hygraph dashboard.`;
      } else if (message.includes('401') || message.includes('Unauthorized')) {
        message = 'Invalid API token or endpoint. Check your configuration.';
      } else if (message.includes('404') || message.includes('Not Found')) {
        message = 'API endpoint not found. Verify your Hygraph endpoint URL.';
      }
      
      setError(message);
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
            <p className="text-white">Featured product loading...</p>
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
              title="Configure Hygraph API"
            >
              <Settings className="w-4 h-4" />
              Configure
            </button>
          )}
          {error && (
            <div className="mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center">
              <p className="text-red-400 font-semibold mb-2">Configuration Issue</p>
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

      {/* Config Modal */}
      <ConfigModal
        isOpen={configOpen}
        onClose={() => setConfigOpen(false)}
        onSave={handleConfigSaved}
        initialConfig={config || undefined}
      />
    </main>
  );
}
