"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  GripVertical,
  Plus,
  AlignLeft,
  TextQuote,
  ListChecks,
  Hash,
  Link2,
  ChevronDown,
  GripHorizontal,
  Grip,
  CircleDot,
} from "lucide-react";

import { Question } from "@/lib/types";
import { cn } from "@/lib/utils";
import QuestionTypeSelect from "./QuestionTypeSelect";

interface QuestionCardProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  dragHandleProps?: any;
  error?: boolean;
}

const questionTypeIcons = {
  short_answer: <AlignLeft className="h-4 w-4" />,
  long_answer: <TextQuote className="h-4 w-4" />,
  single_select: <CircleDot className="h-4 w-4" />,
  number: <Hash className="h-4 w-4" />,
  url: <Link2 className="h-4 w-4" />,
};

export default function QuestionCard({
  question,
  onUpdate,
  onDelete,
  onDuplicate,
  dragHandleProps,
  error,
}: QuestionCardProps) {
  const handleTypeChange = (newType: string) => {
    const updatedQuestion: Question = {
      ...question,
      type: newType,
      options:
        newType === "single_select" ? ["Option 1", "Option 2"] : undefined,
      placeholder: newType === "url" ? "https://" : undefined,
    };
    onUpdate(updatedQuestion);
  };

  return (
    <Card className={cn("mb-4 group hover:border-gray-400 transition-colors")}>
      <CardContent className="px-4 py-2">
        <div className="flex items-start gap-4">
          <div className="flex-1 space-y-1">
            <div className="flex items-start justify-between">
              <div className="flex-1 mb-1">
                <Input
                  value={question.question}
                  onChange={(e) =>
                    onUpdate({ ...question, question: e.target.value })
                  }
                  placeholder="Write a question"
                  className={cn(
                    "text-md font-medium bg-transparent border-0 border-none  p-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0",
                    error && "text-red-500 placeholder:text-red-500"
                  )}
                />
                <Input
                  value={question.helpText || ""}
                  onChange={(e) =>
                    onUpdate({ ...question, helpText: e.target.value })
                  }
                  placeholder="Write a help text or caption (leave empty if not needed)"
                  className="text-sm text-muted-foreground bg-transparent border-0 p-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="flex items-center text-gray-500">
                <QuestionTypeSelect
                  onSelect={handleTypeChange}
                  position="center"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-transparent flex items-center gap-1"
                  >
                    {
                      questionTypeIcons[
                        question.type as keyof typeof questionTypeIcons
                      ]
                    }
                    <ChevronDown className="h-4 w-4"  />
                  </Button>
                </QuestionTypeSelect>

                <div {...dragHandleProps} className="">
                  <Grip className="h-5 w-5 cursor-grabbing" />
                </div>
              </div>
            </div>

            {question.type === "short_answer" && (
              <Input
                disabled
                
              />
            )}

            {question.type === "long_answer" && (
              <Textarea
                disabled
                className="text-muted-foreground"
              />
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
                        className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
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
                    const newOptions = [
                      ...(question.options || []),
                      `Option ${question.options!.length + 1}`,
                    ];
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
