"use client";
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import {
  vehicleCategories,
  brands,
  vehicleModels,
  parts,
  subParts,
} from "../../../../../data/catalogData";
import DetailsPath from "@/app/components/detailsPath";

export default function SubParts() {
  const { categoryId, brandId, modelId, partId } = useParams<{
    categoryId: string;
    brandId: string;
    modelId: string;
    partId: string;
  }>();

  const category = vehicleCategories.find((c) => c.id === categoryId);
  const brand = brands.find((b) => b.id === brandId);
  const model = vehicleModels.find((m) => m.id === modelId);
  const part = parts.find((p) => p.id === partId);
  const partSubParts = subParts.filter((sp) => sp.partId === partId);

  if (!category || !brand || !model || !part) {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link
            href={`/catalog/${categoryId}/${brandId}/${modelId}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к запчастям
          </Link>
          <DetailsPath items={breadcrumbs} />
          <h1 className="text-3xl font-bold text-gray-900">
            Детали: {part.name}
          </h1>
          <p className="text-gray-600 mt-2">Выберите подкатегорию</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {partSubParts.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              Детали для этой запчасти скоро появятся
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partSubParts.map((subPart) => (
              <Link
                key={subPart.id}
                href={`/catalog/${categoryId}/${brandId}/${modelId}/${partId}/${subPart.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={subPart.image}
                    alt={subPart.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {subPart.name}
                  </h3>
                  <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                    <span>Посмотреть товары</span>
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
