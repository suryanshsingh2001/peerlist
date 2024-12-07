"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { Separator } from "../ui/separator";
import { Check, FilePenLine } from "lucide-react";
import { toast } from "sonner";
import { toastMessage } from "@/lib/toast";

export default function DesignFormFooter() {
  const { questions, formTitle } = useFormContext();
  const hasQuestions = questions.length > 0;

  return (
    <>
      <div className="flex items-center justify-between p-2 my-2">
        <Button
          onClick={() =>
            toastMessage({
              message: `${formTitle ? formTitle : "Form"} saved as draft`,
              description: "Your form has been saved as a draft",
            })
          }
          variant="outline"
          disabled={!hasQuestions}
        >
          <FilePenLine className="h-4 w-4" />
          Save as draft
        </Button>
        <Button
          onClick={() => {
            toastMessage({
              message: `${formTitle ? formTitle : "Form"} published`,
              description: "Your form has been published",
            });
          }}
          disabled={!hasQuestions}
        >
          <Check className="h-4 w-4" />
          Publish Form
        </Button>
      </div>
    </>
  );
}
