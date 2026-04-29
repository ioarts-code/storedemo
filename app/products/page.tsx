'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS } from '@/lib/graphql-queries';
import { Grid } from '@/components/grid';
import { Filter } from '@/components/filter';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products on mount
  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const client = createHygraphClient();

        // Fetch products
        const productsData = await client.request<{ products: Product[] }>(
          GET_PRODUCTS
        );

        setProducts(productsData.products);
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

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div>
            <h1 className="text-3xl font-bold text-white">All Products</h1>
            <p className="text-gray-400 mt-1">Browse our complete catalog</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Filter />

          {error && (
            <div className="mt-6 mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center">
              <p className="text-red-400 font-semibold mb-2">API Error</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Grid
            products={products}
            isLoading={isLoading && products.length === 0}
            isEmpty={!isLoading && products.length === 0}
          />

          {!isLoading && (
            <div className="mt-8 text-center text-sm text-gray-400">
              Showing {products.length} products
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
