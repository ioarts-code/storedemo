'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Product, HygraphConfig } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';
import { ProductDetail } from '@/components/product-detail';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError('');

      try {
        const saved = localStorage.getItem('hygraph-config');
        if (!saved) {
          setError('No Hygraph configuration found. Please configure the API endpoint.');
          setIsLoading(false);
          return;
        }

        const config: HygraphConfig = JSON.parse(saved);
        const client = createHygraphClient({
          endpoint: config.endpoint,
          token: config.token,
        });

        const data = await client.request<{ products: Product[] }>(
          GET_PRODUCT_BY_SLUG,
          { slug }
        );

        if (data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to fetch product';
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F]">
        <div className="text-gray-400">Loading product...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link href="/products" className="text-blue-400 hover:text-blue-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Link href="/products" className="text-blue-400 hover:text-blue-300">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>
        <ProductDetail product={product} />
      </div>
    </main>
  );
}
