import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string
  href: string
}

type DetailsPathProps = {
  items: BreadcrumbItem[]
}
export default function DetailsPath({ items }: DetailsPathProps) {
  if (!items?.length) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <div key={item.href} className="flex items-center gap-2">
            {isLast ? (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-gray-900">
                {item.label}
              </Link>
            )}

            {!isLast && <ChevronRight className="w-4 h-4" />}
          </div>
        )
      })}
    </nav>
  )
}

