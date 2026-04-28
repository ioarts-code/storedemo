'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Product, Category } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import {
  GET_PRODUCTS,
  GET_CATEGORIES,
  SEARCH_PRODUCTS,
} from '@/lib/graphql-queries';
import { SearchFilter } from '@/components/search-filter';
import { ServiceGrid } from '@/components/service-grid';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products and categories on mount
  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const client = createHygraphClient();

        // Fetch products and categories in parallel
        const [productsData, categoriesData] = await Promise.all([
          client.request<{ products: Product[] }>(GET_PRODUCTS),
          client.request<{ categories: Category[] }>(GET_CATEGORIES),
        ]);

        setProducts(productsData.products);
        setCategories(categoriesData.categories);
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
        console.error('[v0] Hygraph fetch error:', message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Search and filter products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) =>
        p.categories?.some((c) => c.id === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="p-2 hover:bg-gray-900 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-300" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">All Products</h1>
                <p className="text-gray-400 mt-1">Browse our complete catalog</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center">
            <p className="text-red-400 font-semibold mb-2">API Error</p>
            <p className="text-red-300 text-sm">{error}</p>
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
          <div className="mt-8 text-center text-sm text-gray-400">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        )}
      </div>
    </div>
  );
}
