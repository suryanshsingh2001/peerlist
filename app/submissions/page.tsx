"use client";

import { FormSubmissionsTable } from "@/components/form/FormSubmissionsTable";
import { useFormContext } from "@/context/FormContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import { FormSubmission } from "@/lib/types";

export default function FormSubmissionsPage() {

  const [formSubmissions, setFormSubmissions] = useLocalStorage<FormSubmission[]>("formSubmissions", []);
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-6">Form Submissions</h1>
      <FormSubmissionsTable submissions={formSubmissions} />
    </div>
  );
}
