"use client"

import * as React from "react"
import { DayPicker, DropdownProps } from "react-day-picker"
import { ptBR } from "date-fns/locale"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/shared/button"
import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      captionLayout="dropdown-buttons"
      locale={ptBR}
      fromYear={1900}
      toYear={new Date().getFullYear()}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        nav: "flex items-center justify-between h-[30px] mb-4",
        nav_button: cn(
          buttonVariants({ variant: "secondary" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        vhidden: "hidden",
        caption_label: "hidden",
        caption_dropdowns:
          "flex items-center gap-2 absolute left-1/2 -translate-x-1/2",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_selected:
          "bg-brand-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-brand-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        Dropdown: ({ children, ...props }: DropdownProps) => {
          return (
            <label htmlFor="select" className="relative flex items-center">
              <select
                id="select"
                {...props}
                className="capitalize text-sm border-[1px] rounded-md focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-2  outline-none inline-block appearance-none py-1 pl-2 pr-6 hover:cursor-pointer"
              >
                {children}
              </select>
              <ChevronDown
                className="absolute top-1/2 -translate-y-1/2 right-1 text-muted-foreground pointer-events-none"
                size={16}
              />
            </label>
          )
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
