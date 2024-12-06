"use client";

import { useState } from "react";
import FormPreview from "./FormPreview";

import { type Question } from "@/lib/types";
import FormDesigner from "./FormDesigner";

export default function FormBuilder() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isPreview, setIsPreview] = useState(false);
  const [formTitle, setFormTitle] = useState("Untitled form");

  const handleQuestionsUpdate = (updatedQuestions: Question[]) => {
    setQuestions(updatedQuestions);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 rounded-md">
      {isPreview ? (
        <FormPreview questions={questions} title={formTitle} onDesginerClick={() => {
            setIsPreview(false);
        }} />
      ) : (
        <FormDesigner
          questions={questions}
          onQuestionsUpdate={handleQuestionsUpdate}
          onPreviewClick={() => setIsPreview(true)}
          formTitle={formTitle}
          onFormTitleChange={setFormTitle}
        />
      )}
    </div>
  );
}