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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
   
    const formData = new FormData(e.target as HTMLFormElement);

    const answers = Object.fromEntries(formData);
    console.log("Form submitted", answers);

    // console.log("Form submitted", Object.fromEntries(formData));

    toastMessage({
      message: "Form submitted",
      description: `Answers: ${JSON.stringify(answers, null, 2)}`,
    });
  }

  const handleAnswerChange = (questionId: string, value: string) => {
    console.log("handleAnswerChange", questionId, value);
    mergeAnswers({ [questionId]: value });
  };

  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case "short_answer":
        return (
          <Input
            name={question.id}
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "long_answer":
        return (
          <Textarea
          name={question.id}

            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "single_select":
        return (
          <RadioGroup
          name={question.id}

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
          name={question.id}

            type="number"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case "url":
        return (
          <Input
          name={question.id}

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
                    <p className="text-sm text-gray-700">{question.helpText}</p>
                  )}
                </div>
                {renderQuestionInput(question)}
              </div>
            ))}

            <div className="flex justify-end mt-6">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
