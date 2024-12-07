"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  AlignLeft, 
  TextQuote, 
  ListChecks, 
  Hash, 
  Link2
} from "lucide-react";

interface QuestionTypeSelectProps {
  children: React.ReactNode;
  onSelect: (type: string) => void;
}

export default function QuestionTypeSelect({ children, onSelect }: QuestionTypeSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
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