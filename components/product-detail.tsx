'use client';

import { Product, ProductImage } from '@/lib/types';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(
    product.images?.[0] || null
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/products">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* Product Detail Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images Section */}
          <div>
            {selectedImage?.url && (
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.fileName || product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Image Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImage?.id === img.id
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.fileName || 'Product thumbnail'}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-start">
            {/* Title and Price */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
              </div>
            </div>

            {/* Categories */}
            {product.categories && product.categories.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-slate-600 mb-2">
                  Categories
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((cat) => (
                    <Badge key={cat.id} variant="secondary">
                      {cat.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-8">
              <p className="text-sm font-medium text-slate-600 mb-3">
                Description
              </p>
              <div className="prose prose-sm max-w-none text-slate-700">
                <p className="whitespace-pre-wrap">{product.description}</p>
              </div>
            </div>

            {/* Product Meta */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-slate-600 font-medium mb-1">Product ID</p>
                  <p className="text-slate-900 font-mono text-xs">{product.id}</p>
                </div>
                <div>
                  <p className="text-slate-600 font-medium mb-1">Slug</p>
                  <p className="text-slate-900 font-mono text-xs">{product.slug}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-8 pt-6 border-t">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Images Gallery */}
        {product.images && product.images.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Image Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.images.map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                >
                  <Image
                    src={img.url}
                    alt={img.fileName || 'Product image'}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
