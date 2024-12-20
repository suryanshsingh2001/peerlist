"use client";

import FormPreview from "@/components/form/FormPreview";
import PreviewHeader from "@/components/layout/PreviewHeader";
import { Card } from "@/components/ui/card";

export default function PreviewPage() {
  return (
    <Card className="container flex flex-col min-h-screen mx-auto max-w-2xl rounded-none">
      <PreviewHeader />
      <FormPreview />
    </Card>
  );
}
