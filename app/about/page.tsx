"use client";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Наша компания — это новый онлайн-проект, созданный командой
            специалистов с практическим опытом работы в сфере автозапчастей
            более 30 лет. Мы хорошо понимаем рынок, номенклатуру и реальные
            потребности клиентов, поэтому делаем акцент на понятной и стабильной
            работе.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              {/* <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Основное направление нашей деятельности
              </h2> */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Основное направление нашей деятельности — запчасти для грузовых автомобилей стран СНГ: ГАЗ, КАМАЗ,
                  МАЗ, ЗИЛ, УРАЛ, ПАЗ и другие. Одновременно мы предлагаем
                  широкий ассортимент запчастей для грузовых иномарок, а также
                  ограниченный, но востребованный выбор запчастей для легковых
                  автомобилей — как отечественных, так и иностранных.
                </p>
                <p>
                  Отдельное направление — запчасти для тракторов, спецтехники и
                  сельскохозяйственной техники.
                </p>
                <p>
                  Значительная часть товаров постоянно в наличии на собственных
                  складах, что позволяет оперативно обрабатывать заказы и
                  сокращать сроки поставки. При этом мы активно работаем под
                  заказ и можем привезти необходимые запчасти практически для
                  любой грузовой техники, автобусов или спецмашин — с подбором
                  по каталожным номерам, аналогам и техническим параметрам.
                </p>
                <p>
                  Особое место в нашем ассортименте занимают высококачественные
                  силиконовые патрубки Они доступны для различных моделей
                  автомобилей и техники, а также могут использоваться в
                  универсальных и нестандартных решениях. Возможна поставка под
                  заказ по индивидуальным параметрам, согласованным с
                  заказчиком.
                </p>
                <p>
                  Кроме того, мы рассматриваем производство отдельных видов
                  запчастей под заказ — для клиентов, которым требуется выпуск
                  партий продукции по заданным характеристикам. Речь идет именно
                  о серийных позициях, а не о единичных изделиях.
                </p>
                <p>
                  Наш ассортимент охватывает практически все группы запчастей
                  для грузового транспорта, автобусов и спецтехники.
                </p>
                <p>
                  Мы — широкопрофильная и гибкая компания, ориентированная на
                  долгосрочное и взаимовыгодное сотрудничество. Работаем по
                  делу, говорим на одном языке с клиентами и ценим адекватный,
                  профессиональный подход к бизнесу.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Наши преимущества
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Широкий ассортимент
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Более 50 000 наименований запчастей для всех марок
                      автомобилей
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Гарантия качества
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Все товары проходят контроль качества перед отгрузкой
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Быстрая доставка
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Доставка заказа 1-3 дня по территории Украины
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Профессиональная консультация
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Наши специалисты помогут подобрать нужные детали
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50k+</div>
              <div className="text-gray-600">наименований</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10k+</div>
              <div className="text-gray-600">клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">97%</div>
              <div className="text-gray-600">доставка в срок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Контакты
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Телефон
                    </div>
                    <a
                      href="tel:+74951234567"
                      className="text-red-600 hover:text-red-700"
                    >
                      +38 (098) 123-45-67
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Бесплатный звонок по Украине
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:redlorry002@gmail.com"
                      className="text-red-600 hover:text-red-700"
                    >
                      redlorry002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Адрес
                    </div>
                    <p className="text-gray-700">
                      г. Киев, ул. Соборна, д. 123
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Режим работы
                    </div>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-700">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Форма обратной связи
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="+38 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full bg-red-600 text-white px-6 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
