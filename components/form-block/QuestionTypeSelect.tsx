"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft, TextQuote, ListChecks, Hash, Link2 } from "lucide-react";

interface QuestionTypeSelectProps {
  children: React.ReactNode;
  onSelect: (type: string) => void;
  position?: "start" | "end" | "center";
}

export default function QuestionTypeSelect({
  children,
  onSelect,
  position ="center",
}: QuestionTypeSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align={position} className="w-56">
        <DropdownMenuLabel className="text-gray-500 text-sm font-medium text-center w-full py-2">
          Input Type
        </DropdownMenuLabel>

        <DropdownMenuItem onClick={() => onSelect("short_answer")}>
          <AlignLeft className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Short Answer</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("long_answer")}>
          <TextQuote className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Long Answer</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("single_select")}>
          <ListChecks className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Single Select</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("number")}>
          <Hash className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Number</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("url")}>
          <Link2 className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>URL</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
