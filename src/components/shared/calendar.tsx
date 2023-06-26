"use client"

import * as React from "react"
import { DayPicker, DropdownProps } from "react-day-picker"
import { Select } from "@radix-ui/react-select"
import { ptBR } from "date-fns/locale"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/shared/button"
import { cn } from "@/lib/utils"

import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"

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
        nav: "flex h-[24px] items-center justify-between mb-4",
        nav_button: cn(
          buttonVariants({ variant: "secondary" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        vhidden: "hidden",
        caption_label: "hidden",
        caption_dropdowns:
          "flex items-center gap-2 h-[24px] absolute left-1/2 -translate-x-1/2",
        dropdown: "outline-none",
        dropdown_month: "border-2 p-1 rounded-md focus-within:border-red-500",
        dropdown_year: "border-2 p-1 rounded-md focus-within:border-red-500",
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
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
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
          const options = React.Children.toArray(
            children,
          ) as React.ReactElement[]

          return (
            <Select>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder={props.value} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="capitalize">{props.name}</SelectLabel>
                  {options.map((option, index) => (
                    <SelectItem
                      className="capitalize"
                      key={index}
                      value={option.props.value}
                    >
                      {option.props.children}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
