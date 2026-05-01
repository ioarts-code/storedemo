'use client';

import { useEffect, useState } from 'react';
import { Product, Category } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCTS, GET_CATEGORIES } from '@/lib/graphql-queries';
import { Grid } from '@/components/grid';
import { Filter } from '@/components/filter';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.categories?.some((c) => c.id === selectedCategory))
    : products;

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Filter
            categories={categories}
            onCategoryChange={setSelectedCategory}
            isLoading={isLoading}
          />

          {error && (
            <div className="mt-6 mb-6 p-4 bg-[#1A1A1A] border border-red-700 rounded-lg text-center">
              <p className="text-red-400 font-semibold mb-2">API Error</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <Grid
            products={filteredProducts}
            isLoading={isLoading && products.length === 0}
            isEmpty={!isLoading && filteredProducts.length === 0}
          />
        </div>
      </div>
    </div>
  );
}
