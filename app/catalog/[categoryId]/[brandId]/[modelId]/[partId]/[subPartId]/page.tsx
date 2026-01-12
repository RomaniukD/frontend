"use client";
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Package } from "lucide-react";
import {
  vehicleCategories,
  brands,
  vehicleModels,
  parts,
  subParts,
  productDetails,
} from "@/app/data/catalogData";
import { useCart } from "@/app/context/cart-context";
import DetailsPath from "@/app/components/detailsPath";

export default function Products() {
  const { categoryId, brandId, modelId, partId, subPartId } = useParams<{
    categoryId: string;
    brandId: string;
    modelId: string;
    partId: string;
    subPartId: string;
  }>();

  const { addToCart } = useCart();

  const category = vehicleCategories.find((c) => c.id === categoryId);
  const brand = brands.find((b) => b.id === brandId);
  const model = vehicleModels.find((m) => m.id === modelId);
  const part = parts.find((p) => p.id === partId);
  const subPart = subParts.find((sp) => sp.id === subPartId);
  const products = productDetails.filter((p) => p.subPartId === subPartId);

  if (!category || !brand || !model || !part || !subPart) {
    redirect("/catalog");
  }
  
  const breadcrumbs = [
    { label: category?.name, href: `/catalog/${category?.id}` },
    { label: brand?.name, href: `/catalog/${category?.id}/${brand?.id}` },
    {
      label: model?.name,
      href: `/catalog/${category?.id}/${brand?.id}/${model?.id}`,
    },
    {
      label: part?.name,
      href: `/catalog/${category?.id}/${brand?.id}/${model?.id}/${part?.id}`,
    },
    {
      label: subPart?.name,
      href: `/catalog/${category?.id}/${brand?.id}/${model?.id}/${part?.id}/${subPart?.id}`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link
            href={`/catalog/${categoryId}/${brandId}/${modelId}/${partId}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к деталям
          </Link>
          <DetailsPath items={breadcrumbs} />

          <h1 className="text-3xl font-bold text-gray-900">{subPart.name}</h1>
          <p className="text-gray-600 mt-2">Доступные товары</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              Товары для этой детали скоро появятся
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Нет в наличии
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {product.brand}
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="text-sm text-gray-500 mb-3">
                    Артикул: {product.sku}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </div>
                    {product.inStock && (
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <Package className="w-4 h-4" />
                        <span>В наличии</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="flex-1 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                    >
                      Подробнее
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
