"use client";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ShoppingCart,
  Package,
  Truck,
  Shield,
  Minus,
  Plus,
} from "lucide-react";
import { productDetails } from "@/app/data/catalogData";
import { useCart } from "@/app/context/cart-context";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetail() {
  const { subPartId } = useParams<{ subPartId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productDetails.find((p) => p.id === subPartId);

  if (!product) {
    return <></>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  // Related products (same subPart)
  const relatedProducts = productDetails
    .filter((p) => p.subPartId === product.subPartId && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer inline-flex items-center text-red-600 hover:text-red-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 p-8">
            {product.name}
          </h1>

          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 w-full h-100 m-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <section className="p-8 w-full">
            <table className="w-full ">
              <thead className="p-2">
                <td>№</td>
                <td>Инфо</td>
                <td className="w-4/10">Название детали</td>
                <td className="w-2/10">Заводской номер</td>
                <td className="w-2/10">Количество на модель</td>
                <td></td>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Похожие товары
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/product/${relProduct.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={relProduct.image}
                      alt={relProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-500 mb-1">
                      {relProduct.brand}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relProduct.name}
                    </h3>
                    <div className="text-xl font-bold text-gray-900">
                      {relProduct.price.toLocaleString("ru-RU")} ₽
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
