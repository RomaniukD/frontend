'use client'
import { redirect } from 'next/navigation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, Calendar } from 'lucide-react';
import { vehicleCategories, brands, vehicleModels } from '../../../data/catalogData';
import DetailsPath from '@/app/components/detailsPath';

export default function Models() {
  const { categoryId, brandId } = useParams<{ categoryId: string; brandId: string }>();
  
  const category = vehicleCategories.find(c => c.id === categoryId);
  const brand = brands.find(b => b.id === brandId);
  const models = vehicleModels.filter(m => m.brandId === brandId);

  if (!category || !brand) {
    redirect('/catalog')
  }
    const breadcrumbs = [
    { label: category?.name, href: `/catalog/${category?.id}` },
    { label: brand?.name, href: `/catalog/${category?.id}/${brand?.id}` },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link
            href={`/catalog/${categoryId}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к брендам
          </Link>
          <DetailsPath items={breadcrumbs} />
          <h1 className="text-3xl font-bold text-gray-900">Модели {brand.name}</h1>
          <p className="text-gray-600 mt-2">Выберите модель автомобиля</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {models.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              Модели для этого бренда скоро появятся
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <Link
                key={model.id}
                href={`/catalog/${categoryId}/${brandId}/${model.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {model.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{model.year}</span>
                  </div>
                  <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                    <span>Выбрать запчасти</span>
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
