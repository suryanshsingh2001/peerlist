import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question } from "./types";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateProgress = (
  questions: Question[],
  answers: Record<string, string>
) => {
  if (questions.length === 0) return 0;
  const answeredQuestions = Object.keys(answers).filter(
    (key) => answers[key].trim() !== ""
  ).length;
  return Math.round((answeredQuestions / questions.length) * 100);
};


export const formatToDateString = (date: any) => {
  //make sure it is in indian standard time MM-DD-YYYY

  return format(date, "mm-dd-yyyy");


}
