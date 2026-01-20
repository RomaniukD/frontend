"use client";

import Link from "next/link";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface CarDetail {
  id: string;
  detail: string;
  detail_ua?: string;
  detail_ru?: string;
  href: string;
  children?: CarDetail[];
}

interface PartsClientProps {
  carImage: string;
  carDetails: CarDetail[];
}

export default function PartsClient({
  carImage,
  carDetails,
}: PartsClientProps) {
  const pathname = usePathname()
  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set());
  const [expandedSubParts, setExpandedSubParts] = useState<Set<string>>(
    new Set(),
  );
  const [activeTab, setActiveTab] = useState<"catalog" | "illustrations">(
    "catalog",
  );
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

  const toggleSubPart = (subPartId: string) => {
    setExpandedSubParts((prev) => {
      const next = new Set(prev);
      next.has(subPartId) ? next.delete(subPartId) : next.add(subPartId);
      return next;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column - Car image */}
        <div className="lg:col-span-4">
          <div className=" h-40 rounded-lg flex items-center justify-center overflow-hidden shadow-sm sticky top-4">  {/*bg-gray-100 */}
              <img
                src={carImage}
                alt="Изображение автомобиля"
                className=" h-full object-cover"
              />
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
                  className={`cursor-pointer px-4 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "catalog"
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Каталожные группы
                </button>
                <button
                  onClick={() => setActiveTab("illustrations")}
                  className={`cursor-pointer px-4 py-4 font-medium text-sm border-b-2 transition-colors ${
                    activeTab === "illustrations"
                      ? "border-red-600 text-red-600"
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
                    Каталог запчастей:
                  </div>

                  {/* {carDetails.length === 0 ? ( */}
                  {/* <div className="py-12 text-center"> */}
                  {/* <p className="text-gray-500 text-lg"> */}
                  {/* Запчасти для этой модели скоро появятся */}
                  {/* </p> */}
                  {/* </div> */}
                  {/* ) : ( */}
                  <div className="space-y-1">
                    {carDetails.map((part) => {
                      const isExpanded = expandedParts.has(part.id);
                      const hasSubParts =
                        part.children && part.children.length > 0;

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
                                className="cursor-pointer p-3 hover:bg-gray-50 transition-colors"
                                aria-label={
                                  isExpanded ? "Свернуть" : "Развернуть"
                                }
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-red-600" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-red-600" />
                                )}
                              </button>
                            ) : (
                              <div className="w-11" />
                            )}

                            {/* Part name */}
                            <div className="flex-1 py-3 pr-3">
                              <span className="text-red-600 hover:text-red-700 font-medium cursor-pointer">
                                {part.detail}
                              </span>
                            </div>
                          </div>

                          {/* Sub-parts list (expanded) */}
                          {isExpanded && hasSubParts && (
                            <div className="border-t border-gray-200 bg-gray-50">
                              <div className="pl-14 pr-3 py-2">
                                {part.children!.map((subPart) => {
                                  const isSubExpanded = expandedSubParts.has(
                                    subPart.id,
                                  );
                                  const hasProducts =
                                    subPart.children &&
                                    subPart.children.length > 0;

                                  return (
                                    <div key={subPart.id} className="mb-1">
                                      {/* SubPart header */}
                                      <div className="flex items-center">
                                        {hasProducts ? (
                                          <button
                                            onClick={() =>
                                              toggleSubPart(subPart.id)
                                            }
                                            className="cursor-pointer p-1 hover:bg-white rounded"
                                          >
                                            {isSubExpanded ? (
                                              <ChevronDown className="w-4 h-4 text-red-600" />
                                            ) : (
                                              <ChevronRight className="w-4 h-4 text-red-600" />
                                            )}
                                          </button>
                                        ) : (
                                          <div className="w-5" />
                                        )}

                                        <span className="text-gray-700 text-sm font-medium ml-1">
                                          {subPart.detail}
                                        </span>
                                      </div>

                                      {/* Products list */}
                                      {isSubExpanded && hasProducts && (
                                        <div className="ml-6 mt-1 space-y-1">
                                          {subPart.children!.map((product) => (
                                            <div
                                              key={product.id}
                                              className="flex items-center justify-between bg-white border rounded px-3 py-2 hover:shadow-sm transition"
                                            >
                                              <Link
                                                href={`${pathname}/${product.id}`}
                                                className="text-sm text-gray-800 font-medium hover:text-red-600"
                                                // target="_blank"
                                              >
                                                {product.detail}
                                              </Link>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* )} */}
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
  );
}
