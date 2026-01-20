"use client";

import { ArrowLeft } from "lucide-react";

interface ProductDetailClientProps {
  product: any;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer inline-flex items-center text-red-600 hover:text-red-700"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Назад
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-sm overflow-hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 p-8">
            {product.detailName}
          </h1>

          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 w-full h-100 m-8">
            <img
              src={product.detailImg || "/placeholder.jpg"}
              alt={product.detailName_ua || "Изображение товара"}
              className=" h-full object-cover"
            />
          </div>

          <section className="p-8 w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left border-b">№</th>
                  <th className="p-3 text-left border-b">Инфо</th>
                  <th className="p-3 text-left border-b w-4/10">
                    Название детали
                  </th>
                  <th className="p-3 text-left border-b w-2/10">
                    Заводской номер
                  </th>
                  <th className="p-3 text-left border-b w-2/10">
                    Количество на модель
                  </th>
                  <th className="p-3 border-b"></th>
                </tr>
              </thead>
              <tbody>
                {product.detailInfo?.map((detail: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{detail.positionNumber}</td>
                    <td className="p-3 border-b"><span className="w-5 h-5 rounded-full border flex items-center justify-center">?</span></td>
                    <td className="p-3 border-b">{detail.detailName}</td>
                    <td className="p-3 border-b">{detail.fabrickNumber}</td>
                    <td className="p-3 border-b">{detail.countPerModel}</td>
                    <td className="p-3 border-b"></td>
                  </tr>
                ))}
                {(!product.detailInfo || product.detailInfo.length === 0) && (
                  <>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 border-b">1</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 border-b">2</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b"></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 border-b">3</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b">-</td>
                      <td className="p-3 border-b"></td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </div>
  );
}