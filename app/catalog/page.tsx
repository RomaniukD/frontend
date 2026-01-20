import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { vehicleCategories } from "../data/catalogData";

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Каталог запчастей
          </h1>
          <p className="text-gray-600 mt-2">Выберите категорию транспорта</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicleCategories.map((category) => (
            <Link
              key={category.id}
              href={{
                pathname: `/catalog/${category.id}`,
                query: { categoryName: category.name },
              }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-2xl font-semibold">
                  {category.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                  <span>Выбрать</span>
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
