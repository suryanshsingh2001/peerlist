export interface Question {
  id: string;
  type: string;
  question: string;
  helpText?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface FormSubmission {
  id: number;
  submittedAt: string;
  completionRate: string;
  status: string;
  answers: Record<string, string>;
}
