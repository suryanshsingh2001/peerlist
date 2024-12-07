"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { Check, FileSliders } from "lucide-react";
import { toastMessage } from "@/lib/toast";

export default function DesignFormFooter() {
  const { questions, formTitle } = useFormContext();
  const hasQuestions = questions.length > 0;

  return (
    <>
      <div className="flex items-center justify-between p-2.5 my-2 border-t border-gray-200 bg-gray-100">
        <Button
          onClick={() =>
            toastMessage({
              message: `${formTitle ? formTitle : "Form"} saved as draft`,
              description: "Your form has been saved as a draft",
            })
          }
          size={"sm"}
          variant="outline"
          disabled={!hasQuestions}
        >
          <FileSliders className="h-3 w-3" />
          Save as draft
        </Button>
        <Button
          size={"sm"}
          onClick={() => {
            toastMessage({
              message: `${formTitle ? formTitle : "Form"} published`,
              description: "Your form has been published",
            });
          }}
          disabled={!hasQuestions}
        >
          <Check className="h-3 w-3" />
          Publish Form
        </Button>
      </div>
    </>
  );
}
