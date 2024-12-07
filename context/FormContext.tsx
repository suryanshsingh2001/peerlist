"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FormSubmission, Question } from "@/lib/types";

interface FormContextProps {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  isPreview: boolean;
  setIsPreview: (isPreview: boolean) => void;
  formTitle: string;
  setFormTitle: (title: string) => void;
  answers: Record<string, string>;
  setAnswers: (answers: Record<string, string>) => void;
  mergeAnswers: (newAnswers: Record<string, string>) => void;
  formSubmissions: FormSubmission[];
  setFormSubmissions: (submissions: FormSubmission[]) => void;
  addSubmission: (submission: FormSubmission) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [isPreview, setIsPreview] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const mergeAnswers = (newAnswers: Record<string, string>) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      ...newAnswers,
    }));
  };

  const addSubmission = (submission: FormSubmission) => {
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, submission]);
  }
  ;

  return (
    <FormContext.Provider
      value={{
        questions,
        setQuestions,
        isPreview,
        setIsPreview,
        formTitle,
        setFormTitle,
        answers,
        setAnswers,
        mergeAnswers,
        formSubmissions,
        setFormSubmissions,
        addSubmission,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
