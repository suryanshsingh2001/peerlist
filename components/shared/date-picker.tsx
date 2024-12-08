// components/shared/date-picker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn, formatToDateString } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerDemoProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DatePicker({ selectedDate, onDateChange }: DatePickerDemoProps) {
  const date = selectedDate ? new Date(selectedDate) : undefined;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "MM-dd-yyyy") : <span>MM-DD-YYYY</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
            
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              const formattedData = formatToDateString(selectedDate);
              onDateChange(selectedDate.toString()); 
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}