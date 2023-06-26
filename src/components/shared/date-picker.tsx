"use client"

import * as React from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/shared/button"
import { Calendar } from "@/components/shared/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/popover"
import { cn } from "@/lib/utils"

export function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline-default"}
          className={cn(
            "justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP", { locale: ptBR })
          ) : (
            <span>Selecionar data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
