"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { Separator } from "../ui/separator";

export default function DesignFormFooter() {
  const { questions } = useFormContext();
  const hasQuestions = questions.length > 0;

  const handleSaveDraft = () => {
    // Implement save draft functionality
    console.log("Form saved as draft");
  };

  const handlePublishForm = () => {
    // Implement publish form functionality
    console.log("Form published");
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 mx-2">
        <Button onClick={handleSaveDraft} variant="outline" disabled={!hasQuestions}>
          Save as draft
        </Button>
        <Button onClick={handlePublishForm} disabled={!hasQuestions}>
          Publish Form
        </Button>
      </div>
    </>
  );
}