"use client"
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/mockData';
import { ProductDetail } from '../data/catalogData';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';
import { useCart } from '../context/cart-context';

interface ProductCardProps {
  product: Product | ProductDetail;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  // Determine if product is ProductDetail or old Product type
  const isProductDetail = 'sku' in product;
  const productId = product.id;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <Link href={isProductDetail ? `/product/${productId}` : '#'}>
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Нет в наличии
            </div>
          )}
          {product.inStock && (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              В наличии
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
        <Link href={isProductDetail ? `/product/${productId}` : '#'}>
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="text-xs text-gray-500 mb-3">
          {'category' in product ? product.category : ''}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-bold text-gray-900">
            {product.price.toLocaleString('ru-RU')} ₽
          </div>
        </div>
        
        <button
          onClick={() => isProductDetail && addToCart(product as ProductDetail)}
          disabled={!product.inStock}
          className={`w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-red-600 text-white hover:bg-red-700'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          В корзину
        </button>
      </div>
    </div>
  );
}
