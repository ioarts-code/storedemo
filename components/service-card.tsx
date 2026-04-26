'use client';

import { Product } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  service: Product;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const firstImage = service.images?.[0];

  return (
    <Link href={`/products/${service.slug}`}>
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      {firstImage?.url && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
          <Image
            src={firstImage.url}
            alt={firstImage.fileName || service.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="line-clamp-2">{service.name}</CardTitle>
            {service.categories && service.categories.length > 0 && (
              <CardDescription className="mt-1">
                {service.categories.map((cat) => cat.name).join(', ')}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {service.description}
        </p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-primary">${service.price}</span>
        </div>

        {service.images && service.images.length > 1 && (
          <div className="flex gap-1 mb-4">
            {service.images.slice(0, 3).map((img) => (
              <div key={img.id} className="w-12 h-12 relative rounded overflow-hidden">
                <Image
                  src={img.url}
                  alt={img.fileName || 'Product image'}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            {service.images.length > 3 && (
              <div className="w-12 h-12 bg-muted rounded flex items-center justify-center text-xs">
                +{service.images.length - 3}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
    </Link>
  );
}
