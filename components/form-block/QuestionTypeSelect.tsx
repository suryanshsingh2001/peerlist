"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignLeft,
  TextQuote,
  Hash,
  Link2,
  CircleDot,
  Link,
} from "lucide-react";

interface QuestionTypeSelectProps {
  children: React.ReactNode;
  onSelect: (type: string) => void;
  position?: "start" | "end" | "center";
}

export default function QuestionTypeSelect({
  children,
  onSelect,
  position = "center",
}: QuestionTypeSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align={position} className="w-56">
        <DropdownMenuLabel className="text-gray-500 text-sm bg-gray-50 font-semibold w-full rounded-sm mb-2 leading-tight tracking-wider">
         <span className="ml-1">INPUT TYPES</span>
        </DropdownMenuLabel>

        <DropdownMenuItem onClick={() => onSelect("short_answer")}>
          <AlignLeft className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Short Answer</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("long_answer")}>
          <TextQuote className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Long Answer</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("single_select")}>
          <CircleDot className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Single Select</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("number")}>
          <Hash className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">Number</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("url")}>
          <Link className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span className="font-medium">URL</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
