"use client";

import FormPreview from "@/components/form-section/FormPreview";
import PreviewHeader from "@/components/layout/PreviewHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFormContext } from "@/context/FormContext";
import { Check } from "lucide-react";

export default function PreviewPage() {
  const { isPreview, setIsPreview } = useFormContext();

  return (
    <Card className="container flex flex-col min-h-screen mx-auto max-w-3xl rounded-none">
      <PreviewHeader />
      <FormPreview />
      
    </Card>
  );
}
