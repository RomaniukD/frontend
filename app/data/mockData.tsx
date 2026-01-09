export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  category_ua: string;
  category_ru: string;
  href: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "cat_13b5f436f948",
    name: "Легковые автомобили",
    href: "https://www.autoopt.ru/auto/catalog/car",
    category_ua: "Легкові автомобілі",
    category_ru: "Легковые автомобили",
    image: " ",
    count: 2,
  },
  {
    id: "cat_37fbd64702f3",
    name: "Грузовики и прицепы",
    href: "https://www.autoopt.ru/auto/catalog/truck",
    category_ua: "Вантажівки та причепи",
    category_ru: "Грузовики и прицепы",
    image: "",
    count: 2,
  },
  {
    id: "cat_6ea49a46577d",
    name: "Автобусы",
    href: "https://www.autoopt.ru/auto/catalog/bus",
    category_ua: "Автобуси",
    category_ru: "Автобусы",
    image: "",
    count: 2,
  },
  {
    id: "cat_bd9856d13e19",
    name: "Трактора и комбайны",
    href: "https://www.autoopt.ru/auto/catalog/tractor",
    category_ua: "Трактори та комбайни",
    category_ru: "Трактора и комбайны",
    image: "",
    count: 2,
  },
  {
    id: "cat_5be558b3b401",
    name: "Спецтехника",
    href: "https://www.autoopt.ru/auto/catalog/special",
    category_ua: "Спецтехніка",
    category_ru: "Спецтехника",
    image: "",
    count: 2,
  },
  {
    id: "cat_25d387b2e6ee",
    name: "Двигатели, КПП, ТНВД",
    href: "https://www.autoopt.ru/auto/catalog/engine",
    category_ua: "Двигатели, КПП, ТНВД",
    category_ru: "Двигатели, КПП, ТНВД",
    image: "",
    count: 2,
  },
  {
    id: "cat_c4ea5613da5b",
    name: "Мотоциклы и снегоходы",
    href: "https://www.autoopt.ru/auto/catalog/moto",
    category_ua: "Мотоцикли та снігоходи",
    category_ru: "Мотоциклы и снегоходы",
    image: "",
    count: 2,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Масляный фильтр Mann W 712/73",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1764869427688-3e97480f4b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzY3OTM0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Масла и фильтры",
    brand: "Mann",
    inStock: true,
  },
  {
    id: "2",
    name: "Тормозные колодки Brembo P85020",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1683811199384-60b7020f9bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHBhZHN8ZW58MXx8fHwxNzY3OTU5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Тормозная система",
    brand: "Brembo",
    inStock: true,
  },
  {
    id: "3",
    name: "Аккумулятор Bosch S4 60Ah",
    price: 5800,
    image:
      "https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc2Nzk1MTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Аккумуляторы",
    brand: "Bosch",
    inStock: true,
  },
  {
    id: "4",
    name: "Шина Michelin Pilot Sport 4 225/45 R17",
    price: 8900,
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlc3xlbnwxfHx8fDE3Njc5ODkwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Шины и диски",
    brand: "Michelin",
    inStock: true,
  },
  {
    id: "5",
    name: "Светодиодная фара Philips LED",
    price: 12500,
    image:
      "https://images.unsplash.com/photo-1598586958772-8bf368215c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBoZWFkbGlnaHR8ZW58MXx8fHwxNzY3OTIyMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Освещение",
    brand: "Philips",
    inStock: false,
  },
  {
    id: "6",
    name: "Комплект ГРМ Gates K015607XS",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1767339736247-582fcf11442b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYXJ0cyUyMGVuZ2luZXxlbnwxfHx8fDE3Njc4OTczNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Двигатель",
    brand: "Gates",
    inStock: true,
  },
  {
    id: "7",
    name: "Воздушный фильтр Filtron AP139/4",
    price: 680,
    image:
      "https://images.unsplash.com/photo-1764869427688-3e97480f4b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzY3OTM0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Масла и фильтры",
    brand: "Filtron",
    inStock: true,
  },
  {
    id: "8",
    name: "Тормозной диск ATE 24.0125-0183.1",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1683811199384-60b7020f9bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHBhZHN8ZW58MXx8fHwxNzY3OTU5MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Тормозная система",
    brand: "ATE",
    inStock: true,
  },
];

export const brands = [
  "Mann",
  "Brembo",
  "Bosch",
  "Michelin",
  "Philips",
  "Gates",
  "Filtron",
  "ATE",
];
