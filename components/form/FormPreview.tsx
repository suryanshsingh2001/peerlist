// components/form/FormPreview.tsx
import React, { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/lib/types";
import { toastMessage } from "@/lib/toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { AnimatedContainer } from "../shared/animated-container";

export default function FormPreview() {
  const router = useRouter();
  const {
    questions,
    answers,
    mergeAnswers,
    setAnswers,
    formTitle,
    addSubmission,
    formSubmissions,
  } = useFormContext();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData);

    const submissionData = {
      id: formSubmissions.length + 1,
      formTitle,
      questions,
      submittedAt: new Date().toLocaleString(),
      answers: formObject,
    };

    try {
      const response = await axios.post("/api/saveForm", submissionData);
      console.log("Form saved successfully", response.data);

      addSubmission(submissionData);

      toastMessage({
        message: "Form submitted",
        description: `Your ${formTitle} has been submitted successfully`,
        action: {
          label: "View Submissions",
          onClick: () => {
            console.log("View submissions");
            router.push("/submissions");
          },
        },
      });

      setAnswers({});
    } catch (error: any) {
      console.error("Error saving form data", error);
      toastMessage({
        message: "Error submitting form",
        description: error.message,
      });
    } finally {
      setSubmitting(false);
    }
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
      case "date":
        return (
          <Input
            name={question.id}
            type="date"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AnimatedContainer animation="fade" duration={0.3} className="">
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
              <Button
                disabled={submitting}
                type="submit"
                className="transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {submitting && <Loader className="h-4 w-4 mr-2" />}
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedContainer>
  );
}