import React, { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/lib/types";
import { toastMessage } from "@/lib/toast";
import Link from "next/link";

export default function FormPreview() {
  const { questions, answers, mergeAnswers } = useFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toastMessage({
      message: "Form submitted",
      description: "Thank you for your submission!",
    });
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    mergeAnswers({ [questionId]: value });
  };

  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case "short_answer":
        return (
          <Input
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "long_answer":
        return (
          <Textarea
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "single_select":
        return (
          <RadioGroup
            value={answers[question.id]}
            onValueChange={(value) => handleAnswerChange(question.id, value)}
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case "number":
        return (
          <Input
            type="number"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "url":
        return (
          <Input
            type="url"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="https://"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-base font-semibold">
                    {question.question}
                  </Label>
                  {question.helpText && (
                    <p className="text-sm text-gray-700">
                      {question.helpText}
                    </p>
                  )}
                </div>
                {renderQuestionInput(question)}
              </div>
            ))}
          </form>


          <div className="flex justify-end mt-6">
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}
