import Link from 'next/link';
import { Category } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href="/catalog"
      className="group relative overflow-hidden rounded-xl bg-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
        <p className="text-sm text-white/80">{category.count} товаров</p>
      </div>
    </Link>
  );
}
