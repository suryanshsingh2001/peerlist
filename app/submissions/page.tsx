"use client";

import { FormSubmissionsTable } from "@/components/form/FormSubmissionsTable";
import { useFormContext } from "@/context/FormContext";

export default function FormSubmissionsPage() {
  const { formSubmissions } = useFormContext();
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8  max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Form Submissions</h1>
      <FormSubmissionsTable submissions={formSubmissions} />
    </div>
  );
}
