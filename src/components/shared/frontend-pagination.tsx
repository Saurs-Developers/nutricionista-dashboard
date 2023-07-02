"use client"

import { Dispatch, SetStateAction } from "react"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  lastPage: number
  totalPages: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
}

export function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
  lastPage,
}: Props) {
  const items = new Array(totalPages).fill(0)

  return (
    <div className="flex items-center gap-8 justify-end">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft /> Prev
      </button>
      <div className="flex items-center gap-2">
        {items.map((_, key) => {
          return (
            <button
              className={clsx(
                "rounded-[8px] h-7 w-7",
                key + 1 === currentPage ? "bg-neutral-200" : "",
              )}
              key={key}
              onClick={() => setCurrentPage(key + 1)}
            >
              {key + 1}
            </button>
          )
        })}
      </div>
      <button
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={
          "flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        Next <ChevronRight />
      </button>
    </div>
  )
}
