import { getSubDetails } from "@/app/lib/api";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetail({
  params,
}: {
  params: { subPartId: string };
}) {
  const { subPartId } = await params;

  const response = await getSubDetails(subPartId);
  const product = Array.isArray(response)? response[0]: response
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Товар не найден</p>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}