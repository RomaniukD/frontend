import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RL</span>
              </div>
              <div className="font-bold text-xl text-white">RedLorry</div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Качественные RedLorry для вашего автомобиля. Широкий ассортимент, доступные цены, быстрая доставка.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-sm hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm">+38 (098) 123-45-67</div>
                  <div className="text-xs text-gray-400">Бесплатный звонок</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">redlorry002@gmail.com</div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">г. Киев, ул. Соборна, д. 123</div>
              </li>
            </ul>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                <div className="text-sm">
                  <div>Пн-Пт: 9:00 - 20:00</div>
                  <div>Сб-Вс: 10:00 - 18:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RedLorry. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
