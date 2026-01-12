"use client";
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  vehicleCategories,
  brands,
  vehicleModels,
  parts,
  subParts,
} from "../../../../data/catalogData";
import DetailsPath from "@/app/components/detailsPath";
import { useState } from "react";

export default function Parts() {
  const { categoryId, brandId, modelId } = useParams<{
    categoryId: string;
    brandId: string;
    modelId: string;
  }>();

  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"catalog" | "illustrations">(
    "catalog"
  );

  const category = vehicleCategories.find((c) => c.id === categoryId);
  const brand = brands.find((b) => b.id === brandId);
  const model = vehicleModels.find((m) => m.id === modelId);
  const modelParts = parts.filter((p) => p.modelId === modelId);

  if (!category || !brand || !model) {
    redirect("/catalog");
  }
  const breadcrumbs = [
    { label: category?.name, href: `/catalog/${category?.id}` },
    { label: brand?.name, href: `/catalog/${category?.id}/${brand?.id}` },
    { label: model?.name, href: `/catalog/${category?.id}/${brand?.id}/${model?.id}`,
    },
  ];

  const togglePart = (partId: string) => {
    setExpandedParts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(partId)) {
        newSet.delete(partId);
      } else {
        newSet.add(partId);
      }
      return newSet;
    });
  };

  const getSubPartsForPart = (partId: string) => {
    return subParts.filter((sp) => sp.partId === partId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link
            href={`/catalog/${categoryId}/${brandId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к моделям
          </Link>

          <DetailsPath items={breadcrumbs} />

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Каталог запчастей {model.name}
          </h1>
          <p className="text-gray-600 mt-1">{model.year}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left column - Car image and search */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm sticky top-4">
              {/* Car image */}
              <div className="relative h-64 bg-gray-100">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Search section */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Поиск по каталогу
                </h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Введите название узла или детали"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Parts catalog */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex px-6">
                  <button
                    onClick={() => setActiveTab("catalog")}
                    className={`px-4 py-4 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "catalog"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Каталожные группы
                  </button>
                  <button
                    onClick={() => setActiveTab("illustrations")}
                    className={`px-4 py-4 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "illustrations"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Иллюстрации чертежей
                  </button>
                </div>
              </div>

              {/* Catalog content */}
              <div className="p-6">
                {activeTab === "catalog" ? (
                  <div>
                    <div className="mb-4 text-sm text-gray-600">
                      Развернуть каталог по:
                    </div>

                    {modelParts.length === 0 ? (
                      <div className="py-12 text-center">
                        <p className="text-gray-500 text-lg">
                          Запчасти для этой модели скоро появятся
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {modelParts.map((part) => {
                          const isExpanded = expandedParts.has(part.id);
                          const partSubParts = getSubPartsForPart(part.id);
                          const hasSubParts = partSubParts.length > 0;

                          return (
                            <div
                              key={part.id}
                              className="border border-gray-200 rounded"
                            >
                              {/* Part header */}
                              <div className="flex items-center">
                                {/* Toggle button */}
                                {hasSubParts ? (
                                  <button
                                    onClick={() => togglePart(part.id)}
                                    className="p-3 hover:bg-gray-50 transition-colors"
                                    aria-label={
                                      isExpanded ? "Свернуть" : "Развернуть"
                                    }
                                  >
                                    {isExpanded ? (
                                      <ChevronUp className="w-5 h-5 text-blue-600" />
                                    ) : (
                                      <ChevronDown className="w-5 h-5 text-blue-600" />
                                    )}
                                  </button>
                                ) : (
                                  <div className="w-11" />
                                )}

                                {/* Part name */}
                                <div className="flex-1 py-3 pr-3">
                                  <span className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                                    {part.name}
                                  </span>
                                </div>
                              </div>

                              {/* Sub-parts list (expanded) */}
                              {isExpanded && hasSubParts && (
                                <div className="border-t border-gray-200 bg-gray-50">
                                  <div className="pl-14 pr-3 py-2">
                                    {partSubParts.map((subPart: any) => (
                                      <Link
                                        key={subPart.id}
                                        href={`/catalog/${categoryId}/${brandId}/${modelId}/${part.id}/${subPart.id}`}
                                        className="flex items-start py-2 hover:bg-white rounded px-2 transition-colors group"
                                      >
                                        <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0 group-hover:text-blue-600" />
                                        <span className="text-gray-700 group-hover:text-blue-600 text-sm">
                                          {subPart.name}
                                        </span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-12 text-center">
                    <p className="text-gray-500">
                      Иллюстрации чертежей скоро будут доступны
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
