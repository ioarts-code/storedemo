'use client';

import { useCallback, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Category } from '@/lib/types';
import { Search, X } from 'lucide-react';

interface SearchFilterProps {
  categories: Category[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (categoryId: string | null) => void;
  isLoading?: boolean;
}

export function SearchFilter({
  categories,
  onSearchChange,
  onCategoryChange,
  isLoading = false,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearchChange]);

  const handleCategorySelect = useCallback(
    (categoryId: string | null) => {
      setSelectedCategory(categoryId);
      onCategoryChange(categoryId);
    },
    [onCategoryChange]
  );

  const clearSearch = () => {
    setSearchQuery('');
  };

  const clearCategory = () => {
    handleCategorySelect(null);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
          disabled={isLoading}
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            disabled={isLoading}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div>
          <p className="text-sm font-medium mb-2">Categories</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => clearCategory()}
              disabled={isLoading}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? 'default' : 'outline'
                }
                size="sm"
                onClick={() => handleCategorySelect(category.id)}
                disabled={isLoading}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
