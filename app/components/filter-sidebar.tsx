'use client'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { categories, brands } from '../data/mockData';

interface FilterSidebarProps {
  selectedCategories: string[];
  selectedBrands: string[];
  priceRange: { min: number; max: number };
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceChange: (range: { min: number; max: number }) => void;
  inStockOnly: boolean;
  onInStockChange: (value: boolean) => void;
}

export function FilterSidebar({
  selectedCategories,
  selectedBrands,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
  inStockOnly,
  onInStockChange,
}: FilterSidebarProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Фильтры</h2>

      {/* Stock filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockChange(e.target.checked)}
            className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
          />
          <span className="text-sm text-gray-700">Только в наличии</span>
        </label>
      </div>

      {/* Categories */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="cursor-pointer flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900">Категории</h3>
          {isCategoryOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isCategoryOpen && (
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name='brand'
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => onCategoryChange(category.name)}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">{category.name}</span>
                <span className="text-xs text-gray-400 ml-auto">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="cursor-pointer flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900">Производитель</h3>
          {isBrandOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isBrandOpen && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandChange(brand)}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price range */}
      <div>
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="cursor-pointer flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900">Цена</h3>
          {isPriceOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isPriceOpen && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="От"
                value={priceRange.min || ''}
                onChange={(e) =>
                  onPriceChange({ ...priceRange, min: Number(e.target.value) })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="До"
                value={priceRange.max || ''}
                onChange={(e) =>
                  onPriceChange({ ...priceRange, max: Number(e.target.value) })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
