"use client"
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import {useCart} from "../context/cart-context";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-12 text-center max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Корзина пуста
            </h2>
            <p className="text-gray-600 mb-6">
              Добавьте товары из каталога, чтобы оформить заказ
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/catalog"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Продолжить покупки
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Очистить корзину
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item:any) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-6"
              >
                <Link
                  href={`/product/${item.id}`}
                  className="flex-shrink-0 w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          {item.brand}
                        </div>
                        <Link
                          href={`/product/${item.id}`}
                          className="font-semibold text-gray-900 hover:text-red-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-gray-500 mt-1">
                          Артикул: {item.sku}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 p-2"
                        title="Удалить из корзины"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 1;
                          updateQuantity(item.id, Math.max(1, value));
                        }}
                        className="w-16 h-8 text-center border border-gray-300 rounded-lg"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.price.toLocaleString("ru-RU")} ₽ за шт.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Итого</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Товары (
                    {items.reduce((sum, item) => sum + item.quantity, 0)})
                  </span>
                  <span className="font-medium">
                    {totalPrice.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-medium text-green-600">Бесплатно</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
                <span className="text-lg font-semibold">Общая сумма</span>
                <span className="text-2xl font-bold text-gray-900">
                  {totalPrice.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <button className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-4">
                Оформить заказ
              </button>

              <Link
                href="/catalog"
                className="block w-full bg-gray-100 text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                Продолжить покупки
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                <p>✓ Бесплатная доставка по Москве</p>
                <p>✓ Гарантия на все товары</p>
                <p>✓ Возможность оплаты при получении</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
