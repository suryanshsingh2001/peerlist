import { AlignLeft, TextQuote, Hash, Link2, CircleDot, Calendar } from "lucide-react";

export const QUESTION_TYPES = {
  short_answer: {
    label: "Short Answer",
    icon: <AlignLeft className="h-4 w-4" />,
  },
  long_answer: {
    label: "Long Answer",
    icon: <TextQuote className="h-4 w-4" />,
  },
  single_select: {
    label: "Single Select",
    icon: <CircleDot className="h-4 w-4" />,
  },
  number: {
    label: "Number",
    icon: <Hash className="h-4 w-4" />,
  },
  url: {
    label: "URL",
    icon: <Link2 className="h-4 w-4" />,
  },
  date : {
    label : "Date",
    icon : <Calendar className="h-4 w-4" />
  }
};

export type QuestionType = keyof typeof QUESTION_TYPES;