import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Props {
  lastPage: number
  currentPage: number
}

export function Pagination({ lastPage, currentPage }: Props) {
  const items = new Array(lastPage).fill(0)

  return (
    <div className="flex items-center gap-8 justify-end">
      <Link
        className={clsx(
          "flex items-center gap-2",
          currentPage === 0 ? "opacity-50 pointer-events-none" : "",
        )}
        href={`/dashboard/${currentPage - 1}`}
      >
        <ChevronLeft /> Prev
      </Link>
      <div className="flex items-center gap-2">
        {items.map((_, key) => {
          return (
            <Link
              className={clsx(
                "flex items-center justify-center rounded-[8px] h-7 w-7",
                key === currentPage ? "bg-neutral-200" : "",
              )}
              key={key}
              href={`/dashboard/${key}`}
            >
              {key + 1}
            </Link>
          )
        })}
      </div>
      <Link
        className={clsx(
          "flex items-center gap-2",
          currentPage === lastPage - 1 ? "opacity-50 pointer-events-none" : "",
        )}
        href={`/dashboard/${currentPage + 1}`}
      >
        Next <ChevronRight />
      </Link>
    </div>
  )
}
