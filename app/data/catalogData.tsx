// Multi-level catalog structure
// Navigation hierarchy:
// 1. VehicleCategory (7 categories: cars, trucks, motorcycles, etc.)
// 2. Brand (filtered by category)
// 3. VehicleModel (filtered by brand)
// 4. Part (main parts: engine, transmission, etc. - filtered by model)
// 5. SubPart (sub-parts: cylinder head, brake pads, etc. - filtered by part)
// 6. ProductDetail (final products: bolts, screws, etc. - filtered by subPart)

export interface VehicleCategory {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  categoryId: string;
  logo: string;
}

export interface VehicleModel {
  id: string;
  name: string;
  brandId: string;
  year: string;
  image: string;
}

export interface Part {
  id: string;
  name: string;
  modelId: string;
  image: string;
  hasSubParts: boolean;
}

export interface SubPart {
  id: string;
  name: string;
  partId: string;
  image: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  price: number;
  image: string;
  subPartId: string;
  partId: string;
  brand: string;
  inStock: boolean;
  sku: string;
  description: string;
}

// 7 main vehicle categories
export const vehicleCategories: VehicleCategory[] = [
  {
    id: 'cars',
    name: 'Легковые автомобили',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
    description: 'Запчасти для легковых автомобилей всех марок'
  },
  {
    id: 'trucks',
    name: 'Грузовики',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop',
    description: 'Запчасти для грузовых автомобилей'
  },
  {
    id: 'motorcycles',
    name: 'Мотоциклы',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&h=400&fit=crop',
    description: 'Запчасти для мотоциклов и мотороллеров'
  },
  {
    id: 'engines',
    name: 'Двигатели',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    description: 'Двигатели и комплектующие'
  },
  {
    id: 'buses',
    name: 'Автобусы',
    image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=600&h=400&fit=crop',
    description: 'Запчасти для автобусов и микроавтобусов'
  },
  {
    id: 'agricultural',
    name: 'Спецтехника',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
    description: 'Запчасти для спецтехники и сельхозтехники'
  },
  {
    id: 'trailers',
    name: 'Прицепы',
    image: 'https://images.unsplash.com/photo-1586876607831-05566f64d6b6?w=600&h=400&fit=crop',
    description: 'Запчасти для прицепов и полуприцепов'
  }
];

// Brands for each category
export const brands: Brand[] = [
  // Cars
  { id: 'bmw', name: 'BMW', categoryId: 'cars', logo: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=200&h=200&fit=crop' },
  { id: 'mercedes', name: 'Mercedes-Benz', categoryId: 'cars', logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&h=200&fit=crop' },
  { id: 'audi', name: 'Audi', categoryId: 'cars', logo: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=200&h=200&fit=crop' },
  { id: 'volkswagen', name: 'Volkswagen', categoryId: 'cars', logo: 'https://images.unsplash.com/photo-1622353219448-46a9b overseas?w=200&h=200&fit=crop' },
  { id: 'toyota', name: 'Toyota', categoryId: 'cars', logo: 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?w=200&h=200&fit=crop' },
  
  // Trucks
  { id: 'man', name: 'MAN', categoryId: 'trucks', logo: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&h=200&fit=crop' },
  { id: 'volvo-truck', name: 'Volvo Trucks', categoryId: 'trucks', logo: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?w=200&h=200&fit=crop' },
  { id: 'scania', name: 'Scania', categoryId: 'trucks', logo: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=200&h=200&fit=crop' },
  
  // Motorcycles
  { id: 'yamaha', name: 'Yamaha', categoryId: 'motorcycles', logo: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=200&h=200&fit=crop' },
  { id: 'honda-moto', name: 'Honda', categoryId: 'motorcycles', logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop' },
  { id: 'suzuki', name: 'Suzuki', categoryId: 'motorcycles', logo: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=200&h=200&fit=crop' },
];

// Vehicle models
export const vehicleModels: VehicleModel[] = [
  // BMW models
  { id: 'bmw-3-series', name: 'BMW 3 Series (E90)', brandId: 'bmw', year: '2005-2012', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop' },
  { id: 'bmw-5-series', name: 'BMW 5 Series (F10)', brandId: 'bmw', year: '2010-2017', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop' },
  { id: 'bmw-x5', name: 'BMW X5 (E70)', brandId: 'bmw', year: '2007-2013', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop' },
  
  // Mercedes models
  { id: 'mercedes-e-class', name: 'Mercedes E-Class (W212)', brandId: 'mercedes', year: '2009-2016', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop' },
  { id: 'mercedes-c-class', name: 'Mercedes C-Class (W204)', brandId: 'mercedes', year: '2007-2014', image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=400&fit=crop' },
  
  // Audi models
  { id: 'audi-a4', name: 'Audi A4 (B8)', brandId: 'audi', year: '2008-2015', image: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=600&h=400&fit=crop' },
  { id: 'audi-q5', name: 'Audi Q5', brandId: 'audi', year: '2008-2017', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop' },
];

// Main parts for vehicles
export const parts: Part[] = [
  // BMW 3 Series parts
  { id: 'engine-assembly', name: 'Двигатель', modelId: 'c', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop', hasSubParts: true },
  { id: 'transmission', name: 'Трансмиссия', modelId: 'bmw-3-series', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop', hasSubParts: true },
  { id: 'suspension', name: 'Подвеска', modelId: 'bmw-3-series', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop', hasSubParts: true },
  { id: 'brake-system', name: 'Тормозная система', modelId: 'bmw-3-series', image: 'https://images.unsplash.com/photo-1683811199384-60b7020f9bad?w=400&h=300&fit=crop', hasSubParts: true },
  { id: 'electrical', name: 'Электрика', modelId: 'bmw-3-series', image: 'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?w=400&h=300&fit=crop', hasSubParts: true },
  { id: 'body-parts', name: 'Кузовные детали', modelId: 'bmw-3-series', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop', hasSubParts: true },
];

// Sub-parts (детали запчастей)
export const subParts: SubPart[] = [
  // Engine sub-parts
  { id: 'cylinder-head', name: 'Головка блока цилиндров', partId: 'engine-assembly', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop' },
  { id: 'piston-group', name: 'Поршневая группа', partId: 'engine-assembly', image: 'https://images.unsplash.com/photo-1767339736247-582fcf11442b?w=400&h=300&fit=crop' },
  { id: 'crankshaft', name: 'Коленвал', partId: 'engine-assembly', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop' },
  { id: 'timing-belt', name: 'Ремень ГРМ', partId: 'engine-assembly', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop' },
  
  // Brake system sub-parts
  { id: 'brake-pads-front', name: 'Передние тормозные колодки', partId: 'brake-system', image: 'https://images.unsplash.com/photo-1683811199384-60b7020f9bad?w=400&h=300&fit=crop' },
  { id: 'brake-disc-front', name: 'Передние тормозные диски', partId: 'brake-system', image: 'https://images.unsplash.com/photo-1683811199384-60b7020f9bad?w=400&h=300&fit=crop' },
  { id: 'brake-caliper', name: 'Тормозной суппорт', partId: 'brake-system', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop' },
  
  // Suspension sub-parts
  { id: 'shock-absorber', name: 'Амортизатор', partId: 'suspension', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop' },
  { id: 'spring', name: 'Пружина', partId: 'suspension', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop' },
  { id: 'control-arm', name: 'Рычаг подвески', partId: 'suspension', image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop' },
];

export const productDetails: ProductDetail[] = [
  // Brake pads products
  {
    id: 'brake-pad-set-brembo',
    name: 'Комплект тормозных колодок Brembo P85020',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1683811199384-60b7020f9bad?w=400&h=300&fit=crop',
    subPartId: 'brake-pads-front',
    partId: 'brake-system',
    brand: 'Brembo',
    inStock: true,
    sku: 'BRE-P85020',
    description: 'Высококачественные керамические тормозные колодки для передней оси'
  },
  {
    id: 'brake-pad-bolt-kit',
    name: 'Комплект болтов крепления тормозных колодок',
    price: 250,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    subPartId: 'brake-pads-front',
    partId: 'brake-system',
    brand: 'OEM',
    inStock: true,
    sku: 'OEM-BRK-BOLT-01',
    description: 'Оригинальные болты M8x25 для крепления тормозных колодок, комплект 4 шт'
  },
  {
    id: 'brake-pad-clip',
    name: 'Пружинные скобы тормозных колодок',
    price: 180,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop',
    subPartId: 'brake-pads-front',
    partId: 'brake-system',
    brand: 'Febi',
    inStock: true,
    sku: 'FEBI-45821',
    description: 'Антивибрационные скобы для фиксации тормозных колодок'
  },
  {
    id: 'brake-pad-sensor',
    name: 'Датчик износа тормозных колодок',
    price: 450,
    image: 'https://images.unsplash.com/photo-1598586958772-8bf368215c2a?w=400&h=300&fit=crop',
    subPartId: 'brake-pads-front',
    partId: 'brake-system',
    brand: 'ATE',
    inStock: true,
    sku: 'ATE-24371',
    description: 'Электронный датчик контроля износа колодок'
  },

  {
    id: 'brake-disc-ate',
    name: 'Тормозной диск ATE 24.0125-0183.1',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1683811199384-60b7020f9bad?w=400&h=300&fit=crop',
    subPartId: 'brake-disc-front',
    partId: 'brake-system',
    brand: 'ATE',
    inStock: true,
    sku: 'ATE-24012501831',
    description: 'Вентилируемый тормозной диск диаметр 300мм'
  },
  {
    id: 'brake-disc-screw',
    name: 'Винт крепления тормозного диска M6x12',
    price: 50,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    subPartId: 'brake-disc-front',
    partId: 'brake-system',
    brand: 'OEM',
    inStock: true,
    sku: 'OEM-DSC-SCR-01',
    description: 'Винт с цилиндрической головкой под Torx T30'
  },

  {
    id: 'shock-bilstein',
    name: 'Амортизатор передний Bilstein B4',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop',
    subPartId: 'shock-absorber',
    partId: 'suspension',
    brand: 'Bilstein',
    inStock: true,
    sku: 'BIL-B4-22-046358',
    description: 'Газомасляный амортизатор для передней подвески'
  },
  {
    id: 'shock-mounting-kit',
    name: 'Комплект крепления амортизатора',
    price: 650,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    subPartId: 'shock-absorber',
    partId: 'suspension',
    brand: 'Lemförder',
    inStock: true,
    sku: 'LEM-31456',
    description: 'Опорный подшипник с болтами крепления'
  },
  {
    id: 'shock-dust-cover',
    name: 'Пыльник амортизатора с отбойником',
    price: 320,
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&h=300&fit=crop',
    subPartId: 'shock-absorber',
    partId: 'suspension',
    brand: 'Sachs',
    inStock: true,
    sku: 'SACHS-900154',
    description: 'Защитный комплект для штока амортизатора'
  },

  {
    id: 'timing-belt-gates',
    name: 'Ремень ГРМ Gates K015607XS',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1767339736247-582fcf11442b?w=400&h=300&fit=crop',
    subPartId: 'timing-belt',
    partId: 'engine-assembly',
    brand: 'Gates',
    inStock: true,
    sku: 'GATES-K015607XS',
    description: 'Комплект ГРМ с роликами и водяным насосом'
  },
  {
    id: 'timing-bolt-kit',
    name: 'Комплект болтов ГРМ',
    price: 850,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    subPartId: 'cylinder-head',
    partId: 'engine-assembly',
    brand: 'BMW',
    inStock: true,
    sku: 'OEM-TIM-BOLT-SET',
    description: 'Оригинальные болты крепления шкивов и роликов, 12 шт'
  },
];