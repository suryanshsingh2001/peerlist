import { QuestionType } from "./questionTypes";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  helpText?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface FormSubmission {
  id: number;
  formTitle: string;
  submittedAt: string;
  answers: Record<string, string> | any;
  questions: Question[];
}
