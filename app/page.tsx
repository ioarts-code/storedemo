'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { HygraphConfig, Product, Category } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS, GET_CATEGORIES, SEARCH_PRODUCTS } from '@/lib/graphql-queries';
import { ConfigPanel } from '@/components/config-panel';
import { SearchFilter } from '@/components/search-filter';
import { ServiceGrid } from '@/components/service-grid';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import HeroSection from '@/components/hero-section';

export default function Home() {
  const [config, setConfig] = useState<HygraphConfig | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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

  // Fetch services and categories
  const fetchData = useCallback(async () => {
    if (!config) return;

    setIsLoading(true);
    setError('');

    try {
      const client = createHygraphClient(config);

      // Fetch categories
      const categoriesData = await client.request<{ categories: Category[] }>(
        GET_CATEGORIES
      );
      setCategories(categoriesData.categories);

      // Fetch products
      const productsData = await client.request<{ products: Product[] }>(
        GET_PRODUCTS
      );
      setProducts(productsData.products);
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

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.categories?.some((cat) => cat.id === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-white flex">
      {/* Left Column - Hero Section */}
      <HeroSection />

      {/* Right Column - Products */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b bg-white sticky top-[64px] z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Store</h1>
                <p className="text-slate-600 mt-1">Explore our products</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setConfigOpen(true)}
                title="Configure Hygraph API"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 overflow-y-auto">
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

              {/* Search and Filter */}
              <div className="mb-8">
                <SearchFilter
                  categories={categories}
                  onSearchChange={setSearchQuery}
                  onCategoryChange={setSelectedCategory}
                  isLoading={isLoading}
                />
              </div>

              {/* Product Grid */}
              <ServiceGrid
                services={filteredProducts}
                isLoading={isLoading && products.length === 0}
                isEmpty={!isLoading && filteredProducts.length === 0}
              />

              {/* Results count */}
              {!isLoading && (
                <div className="mt-8 text-center text-sm text-slate-600">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Config Panel Modal */}
      <ConfigPanel
        onConfigSaved={setConfig}
        initialConfig={config || undefined}
        isOpen={configOpen}
        onOpenChange={setConfigOpen}
      />
    </main>
  );
}
