"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoreVertical, GripVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  dragHandleProps?: any;
}

export default function QuestionCard({
  question,
  onUpdate,
  onDelete,
  onDuplicate,
  dragHandleProps,
}: QuestionCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div {...dragHandleProps}>
            <GripVertical className="h-6 w-6 text-gray-400 cursor-move" />
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <Input
                  value={question.question}
                  onChange={(e) =>
                    onUpdate({ ...question, question: e.target.value })
                  }
                  placeholder="Write a question"
                  className="text-lg font-medium bg-transparent border-0 p-0 w-full focus-visible:ring-0"
                />
                <Input
                  value={question.helpText || ""}
                  onChange={(e) =>
                    onUpdate({ ...question, helpText: e.target.value })
                  }
                  placeholder="Write a help text or caption (leave empty if not needed)"
                  className="text-sm text-muted-foreground bg-transparent border-0 p-0 w-full focus-visible:ring-0"
                />
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={onDuplicate}>
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={onDelete}
                      className="text-destructive"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {question.type === "short_answer" && (
              <Input disabled placeholder="Short answer text" />
            )}

            {question.type === "long_answer" && (
              <Textarea disabled placeholder="Long answer text" />
            )}

            {question.type === "single_select" && question.options && (
              <div className="space-y-2">
                <RadioGroup>
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} disabled />
                      <Input
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...question.options!];
                          newOptions[index] = e.target.value;
                          onUpdate({ ...question, options: newOptions });
                        }}
                        className="border-0 bg-transparent focus-visible:ring-0"
                      />
                    </div>
                  ))}
                </RadioGroup>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    const newOptions = [...(question.options || []), `Option ${question.options!.length + 1}`];
                    onUpdate({ ...question, options: newOptions });
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Option
                </Button>
              </div>
            )}

            {question.type === "number" && (
              <Input type="number" disabled placeholder="0" />
            )}

            {question.type === "url" && (
              <Input
                disabled
                placeholder={question.placeholder || "https://"}
                className="text-muted-foreground"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}