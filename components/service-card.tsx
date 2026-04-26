'use client';

import { Service } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {service.image?.url && (
        <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
          <Image
            src={service.image.url}
            alt={service.image.alt || service.name}
            fill
            className="object-cover"
          />
        </div>
      )}

      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="line-clamp-2">{service.name}</CardTitle>
            {service.category && (
              <CardDescription className="mt-1">
                {service.category.name}
              </CardDescription>
            )}
          </div>
          {service.icon && (
            <div className="text-2xl flex-shrink-0">{service.icon}</div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {service.shortDescription || service.description}
        </p>

        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {service.tags.slice(0, 3).map((tag) => (
              <Badge key={tag.id} variant="secondary" className="text-xs">
                {tag.name}
              </Badge>
            ))}
            {service.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{service.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {service.url && (
          <a
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-auto"
          >
            Visit
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </CardContent>
    </Card>
  );
}
