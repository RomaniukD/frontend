import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBrands } from "../../lib/api";

export default async function Brands({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { categoryName?: string };
}) {
  const { categoryId } = await params;

  const { category, brands } = await getBrands(categoryId);
  const {categoryName} = await searchParams
  if (!category) return <div>Категория не найдена</div>;

  if (!category) {
    throw new Error("invalid category in url");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/catalog"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад к категориям
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            {category.category}
          </h1>
          <p className="text-gray-600 mt-2">Выберите бренд</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {brands.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              Бренды для этой категории скоро появятся
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand: any) => (
              <Link
                key={brand._id}
                href={{
                  pathname: `/catalog/${categoryId}/${brand.brandLink}`,
                  query: {categoryName: category.category, brandName:brand.brandName},
                }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="aspect-square mb-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={brand.imageKey}
                    alt={brand.brandName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">
                  {brand.brandName}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
