import Link from 'next/link';
import { ArrowRight, Truck, Shield, Clock, CreditCard, Calendar, FileText } from 'lucide-react';
import { ProductCard } from './components/product-card';
import { productDetails } from './data/catalogData';

export default function Home() {
  const popularProducts = productDetails.slice(0, 4);

  // Mock news data
  const news = [
    {
      id: 1,
      title: 'Новое поступление запчастей для BMW',
      date: '10 января 2026',
      excerpt: 'В наличии оригинальные запчасти для всех моделей BMW. Специальные цены на складские остатки.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Акция на масляные фильтры',
      date: '8 января 2026',
      excerpt: 'Скидка 15% на все масляные фильтры при покупке моторного масла. Акция действует до конца месяца.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Расширение ассортимента для грузовиков',
      date: '5 января 2026',
      excerpt: 'Добавлены новые позиции запчастей для грузовых автомобилей Mercedes, MAN и Volvo.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Качественные автозапчасти для вашего автомобиля
            </h1>
            <p className="text-lg md:text-xl mb-8 text-red-100">
              Широкий ассортимент оригинальных и неоригинальных запчастей от ведущих производителей. Гарантия качества и быстрая доставка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Перейти в каталог
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors border border-red-600"
              >
                О компании
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Быстрая доставка</h3>
              <p className="text-sm text-gray-600">Доставка по Москве в день заказа</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-sm text-gray-600">Все товары сертифицированы</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Работаем 7 дней</h3>
              <p className="text-sm text-gray-600">Без выходных и праздников</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Удобная оплата</h3>
              <p className="text-sm text-gray-600">Наличные, карта, безнал</p>
            </div>
          </div>
        </div>
      </section>

      {/* News section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Новости и акции</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1">
                    Подробнее
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Популярные товары</h2>
            <Link
              href="/catalog"
              className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1"
            >
              Весь каталог
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Не нашли нужную запчасть?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем подобрать необходимые детали для вашего автомобиля
          </p>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-900 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
          >
            Связаться с нами
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}