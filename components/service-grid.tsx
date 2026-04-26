'use client';

import { Service } from '@/lib/types';
import { ServiceCard } from './service-card';
import { Empty } from '@/components/ui/empty';
import { Spinner } from '@/components/ui/spinner';

interface ServiceGridProps {
  services: Service[];
  isLoading?: boolean;
  isEmpty?: boolean;
}

export function ServiceGrid({
  services,
  isLoading = false,
  isEmpty = false,
}: ServiceGridProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner />
      </div>
    );
  }

  if (isEmpty || services.length === 0) {
    return (
      <Empty
        heading="No services found"
        description="Try adjusting your search or filter criteria"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
