// components/questions/QuestionCard.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { ChevronDown, Grip, Plus } from "lucide-react";

import { Question } from "@/lib/types";
import { cn } from "@/lib/utils";
import QuestionTypeSelect from "./QuestionTypeSelect";
import { QUESTION_TYPES, QuestionType } from "@/lib/questionTypes";
import { QuestionMenuContainer } from "./QuestionMenu";

interface QuestionCardProps {
  question: Question;
  onUpdate: (updatedQuestion: Question) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  dragHandleProps?: any;
  error?: boolean;
}

export default function QuestionCard({
  question,
  onUpdate,
  onDelete,
  onDuplicate,
  dragHandleProps,
  error,
}: QuestionCardProps) {
  const handleTypeChange = (newType: QuestionType) => {
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
    <QuestionMenuContainer onDelete={onDelete} onDuplicate={onDuplicate}>
      <Card className={cn("mb-3 group  hover:bg-gray-50  transition-colors")}>
        <CardContent className="px-3 py-2">
          <div className="flex items-start gap-2">
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <div className="flex-1  mb-1">
                  <Input
                    value={question.question}
                    onChange={(e) =>
                      onUpdate({ ...question, question: e.target.value })
                    }
                    placeholder="Write a question"
                    className={cn(
                      "text-md font-medium bg-transparent border-0 border-none p-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0",
                      error && "text-red-500 placeholder:text-red-500"
                    )}
                  />
                  <Input
                    value={question.helpText || ""}
                    onChange={(e) =>
                      onUpdate({ ...question, helpText: e.target.value })
                    }
                    placeholder="Write a help text or caption (leave empty if not needed)"
                    className="text-sm text-gray-800 placeholder:text-muted-foreground bg-transparent border-0 p-0 w-full focus-visible:ring-0 focus-visible:ring-offset-0"
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
                        QUESTION_TYPES[
                          question.type as keyof typeof QUESTION_TYPES
                        ].icon
                      }
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </QuestionTypeSelect>

                  <div {...dragHandleProps} className="">
                    <Grip className="h-5 w-5 cursor-grabbing" />
                  </div>
                </div>
              </div>

              {question.type === "short_answer" && <Input disabled />}

              {question.type === "long_answer" && (
                <Textarea disabled className="text-muted-foreground" />
              )}

              {question.type === "single_select" && question.options && (
                <div>
                  <RadioGroup>
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value={option} disabled />
                          <Input
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...question.options!];
                              newOptions[index] = e.target.value;
                              onUpdate({ ...question, options: newOptions });
                            }}
                            className="border border-gray-300 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                        {index === question!.options!.length - 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              const newOptions = [
                                ...(question.options || []),
                                `Option ${question.options!.length + 1}`,
                              ];
                              onUpdate({ ...question, options: newOptions });
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
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

              {question.type === "date" && (
                <Input
                  type="date"
                  placeholder=""
                  disabled
                  className="text-muted-foreground"
                />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </QuestionMenuContainer>
  );
}
