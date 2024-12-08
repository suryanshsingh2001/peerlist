"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { QUESTION_TYPES, QuestionType } from "@/lib/questionTypes";

interface QuestionTypeSelectProps {
  children: React.ReactNode;
  onSelect: (type: QuestionType) => void;
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

        {Object.entries(QUESTION_TYPES).map(([type, { label, icon }]) => (
          <DropdownMenuItem
            key={type}
            onClick={() => onSelect(type as QuestionType)}
          >
            {icon}
            <div className="flex flex-col">
              <span className="font-medium">{label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
