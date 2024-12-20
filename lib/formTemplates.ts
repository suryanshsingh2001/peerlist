import { FormTemplate, Question } from "@/lib/types";

export const formTemplates: FormTemplate[] = [
  {
    formTitle: "Customer Satisfaction Survey",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Name",
        helpText: "Please enter your name",
        required: false,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: false,
      },
      {
        id: "q3",
        type: "single_select",
        question: "How satisfied are you with our service?",
        options: [
          "Very Satisfied",
          "Satisfied",
          "Neutral",
          "Dissatisfied",
          "Very Dissatisfied",
        ],
        required: true,
      },
      {
        id: "q4",
        type: "long_answer",
        question: "What can we improve?",
        helpText: "Please provide your feedback",
        required: false,
      },
    ],
  },
  {
    formTitle: "Product Feedback Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Name",
        helpText: "Please enter your name",
        required: false,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: false,
      },
      {
        id: "q3",
        type: "single_select",
        question: "How would you rate our product?",
        options: ["Excellent", "Good", "Average", "Poor"],
        required: true,
      },
      {
        id: "q4",
        type: "long_answer",
        question: "Comments",
        helpText: "Please provide any additional comments or feedback",
        required: false,
      },
    ],
  },
  {
    formTitle: "Contact Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Name",
        helpText: "Please enter your full name",
        required: true,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: true,
      },
      {
        id: "q3",
        type: "long_answer",
        question: "Message",
        helpText: "Please enter your message",
        required: true,
      },
    ],
  },
  {
    formTitle: "Feedback Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Name",
        helpText: "Please enter your full name",
        required: true,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: true,
      },
      {
        id: "q3",
        type: "single_select",
        question: "How would you rate our service?",
        options: ["Excellent", "Good", "Average", "Poor"],
        required: true,
      },
      {
        id: "q4",
        type: "long_answer",
        question: "Additional Comments",
        helpText: "Please provide any additional comments or feedback",
        required: false,
      },
    ],
  },
  {
    formTitle: "Job Application Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Full Name",
        helpText: "Please enter your full name",
        required: true,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: true,
      },
      {
        id: "q3",
        type: "number",
        question: "Phone Number",
        helpText: "Please enter your phone number",
        required: true,
      },
      {
        id: "q4",
        type: "url",
        question: "LinkedIn Profile",
        helpText: "Please enter the URL of your LinkedIn profile",
        required: false,
      },
      {
        id: "q5",
        type: "long_answer",
        question: "Cover Letter",
        helpText: "Please provide your cover letter",
        required: true,
      },
    ],
  },
  {
    formTitle: "Event Registration Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Full Name",
        helpText: "Please enter your full name",
        required: true,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: true,
      },
      {
        id: "q3",
        type: "number",
        question: "Phone Number",
        helpText: "Please enter your phone number",
        required: true,
      },
      {
        id: "q4",
        type: "single_select",
        question: "Event Session",
        options: ["Morning", "Afternoon", "Evening"],
        required: true,
      },
      {
        id: "q5",
        type: "date",
        question: "Preferred Date",
        helpText: "Please select your preferred date",
        required: true,
      },
    ],
  },
  {
    formTitle: "Survey Form",
    questions: [
      {
        id: "q1",
        type: "short_answer",
        question: "Name",
        helpText: "Please enter your name",
        required: false,
      },
      {
        id: "q2",
        type: "short_answer",
        question: "Email",
        helpText: "Please enter your email address",
        required: false,
      },
      {
        id: "q3",
        type: "single_select",
        question: "How satisfied are you with our product?",
        options: [
          "Very Satisfied",
          "Satisfied",
          "Neutral",
          "Dissatisfied",
          "Very Dissatisfied",
        ],
        required: true,
      },
      {
        id: "q4",
        type: "long_answer",
        question: "What can we improve?",
        helpText: "Please provide your feedback",
        required: false,
      },
    ],
  },
];
