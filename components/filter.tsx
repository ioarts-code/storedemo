'use client';

import { Category } from '@/lib/types';
import { useState } from 'react';

interface FilterProps {
  categories: Category[];
  onCategoryChange: (categoryId: string | null) => void;
  isLoading?: boolean;
}

export function Filter({
  categories,
  onCategoryChange,
  isLoading = false,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    const newSelected = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newSelected);
    onCategoryChange(newSelected);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            All Products
          </h2>
          <p className="text-white mt-2">Products inventory - please choose</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {/* Show All button */}
          <button
            onClick={() => {
              setSelectedCategory(null);
              onCategoryChange(null);
            }}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
              selectedCategory === null
                ? 'bg-white text-black border-3 border-white'
                : 'bg-transparent text-white border-3 border-white hover:bg-white/20'
            }`}
          >
            All
          </button>

          {/* Category buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              disabled={isLoading}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                selectedCategory === category.id
                  ? 'bg-white text-black border-3 border-white'
                  : 'text-white border-3 border-white hover:bg-gray-700'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
