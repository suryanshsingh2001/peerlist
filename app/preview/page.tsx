"use client";

import FormPreview from "@/components/form-section/FormPreview";
import PreviewHeader from "@/components/layout/PreviewHeader";
import { Card } from "@/components/ui/card";
import { useFormContext } from "@/context/FormContext";

export default function PreviewPage() {

  return (
    <Card className="container flex flex-col min-h-screen mx-auto max-w-3xl rounded-none">
      <PreviewHeader />
      <FormPreview />
      
    </Card>
  );
}
