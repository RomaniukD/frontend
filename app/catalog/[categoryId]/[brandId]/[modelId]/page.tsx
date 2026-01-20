import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DetailsPath from "@/app/components/detailsPath";
import { getDetails } from "@/app/lib/api";
import PartsClient from "./PartsClient";

export default async function Parts({
  params,
  searchParams,
}: {
  params: { brandId: string; categoryId: string; modelId: string };
  searchParams: { carImage?: string, categoryName:string, brandName:string  };
}) {
  const { categoryId, brandId, modelId } = await params;
  const {carImage, categoryName, brandName} = await searchParams;
  if (!categoryId || !brandId || !modelId) {
    return (
      <div>
        <h1>не найдено модели</h1>
      </div>
    );
  }

  const response = await getDetails(modelId);
  const detail = Array.isArray(response) ? response[0] : response;
  if (!detail) {
    return (
      <div>
        <h1>не найдено модели 121</h1>
      </div>
    );
  }

  const breadcrumbs = [
    { label: categoryName, href: `/catalog/${categoryId}` },
    { label: brandName, href: `/catalog/${categoryId}/${brandId}` },
    {
      label: detail.carName,
      href: `/catalog/${categoryId}/${brandId}/${detail._id}`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link
            href={`/catalog/${categoryId}/${brandId}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к моделям
          </Link>

          <DetailsPath items={breadcrumbs} />

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Каталог запчастей {detail.carName}
          </h1>
        </div>
      </div>

      <PartsClient carImage={carImage || ''}  carDetails={detail.carDetails} />
    </div>
  );
}
