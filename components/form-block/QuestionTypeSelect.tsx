"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft, TextQuote, ListChecks, Hash, Link2 } from "lucide-react";

interface QuestionTypeSelectProps {
  children: React.ReactNode;
  onSelect: (type: string) => void;
}

export default function QuestionTypeSelect({
  children,
  onSelect,
}: QuestionTypeSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem onClick={() => onSelect("short_answer")}>
          <AlignLeft className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Short Answer</span>
            <span className="text-xs text-muted-foreground">
              Single line of text
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("long_answer")}>
          <TextQuote className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Long Answer</span>
            <span className="text-xs text-muted-foreground">
              Multiple lines of text
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("single_select")}>
          <ListChecks className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Single Select</span>
            <span className="text-xs text-muted-foreground">
              Choose one option
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("number")}>
          <Hash className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Number</span>
            <span className="text-xs text-muted-foreground">
              Numerical input
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSelect("url")}>
          <Link2 className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>URL</span>
            <span className="text-xs text-muted-foreground">
              Web address input
            </span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
