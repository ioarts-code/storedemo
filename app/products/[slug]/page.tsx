'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Product, HygraphConfig } from '@/lib/types';
import { createHygraphClient } from '@/lib/hygraph-client';
import { GET_PRODUCT_BY_SLUG } from '@/lib/graphql-queries';
import { ProductDetail } from '@/components/product-detail';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
        const client = createHygraphClient(config);

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
        console.error('[v0] Product fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            {error ? 'Error Loading Product' : 'Product Not Found'}
          </h1>
          <p className="text-slate-600 mb-8">
            {error || 'The product you are looking for does not exist.'}
          </p>
          <Link href="/products">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
