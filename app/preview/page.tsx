"use client";

import FormPreview from "@/components/form-section/FormPreview";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { Check } from "lucide-react";

export default function PreviewPage() {
  const { isPreview, setIsPreview } = useFormContext();

  return (
    <main className="container mx-auto max-w-4xl min-h-screen flex flex-col py-2  border border-red-600 rounded-md">
      <FormPreview onDesginerClick={() => setIsPreview(false)} />
       <div className="flex flex-1 items-end">
            <Button type="submit" size={"sm"} className="ml-auto bg-[#00ab45]">
            <Check className="h-4 w-4" />
            Publish Form
      </Button>
       </div>
      
    </main>
  );
}
