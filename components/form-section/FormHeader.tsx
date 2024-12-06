"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, Table } from "lucide-react";

interface FormHeaderProps {
  title: string;
  onTitleChange: (title: string) => void;
  onPreviewClick: () => void;
  onToggleSubmissions: () => void;
  showSubmissions: boolean;
}

export default function FormHeader({
  title,
  onTitleChange,
  onPreviewClick,
  onToggleSubmissions,
  showSubmissions,
}: FormHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8 border-b pb-4 ">
      <Input
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="Untitled form"
        className="text-xl font-semibold bg-transparent border-0 p-0 w-[300px] focus-visible:ring-0"
      />
      <div className="flex items-center gap-2 ">
        <Button variant="outline" onClick={onToggleSubmissions}>
          <Table className="h-4 w-4 mr-2" />
          {showSubmissions ? "Edit Form" : "View Submissions"}
        </Button>
        <Button variant="outline" onClick={onPreviewClick}>
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
      </div>
    </div>
  );
}
