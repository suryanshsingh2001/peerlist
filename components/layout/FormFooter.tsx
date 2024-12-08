"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/FormContext";
import { Check, FileSliders } from "lucide-react";
import { toastMessage } from "@/lib/toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DesignFormFooter() {
  const router = useRouter();
  const { questions, formTitle } = useFormContext();
  const [completed, setCompleted] = useState(false);
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
          className="transition-all duration-300 hover:scale-105 active:scale-95"
          disabled={!hasQuestions}
        >
          <FileSliders className="h-3 w-3" />
          Save as draft
        </Button>
        <Button
          size={"sm"}
          onClick={() => {
            setCompleted(true);
            router.push("/preview");
            toastMessage({
              message: `${formTitle ? formTitle : "Form"} published`,
              description: "Your form has been published",
            });
          }}
          className="transition-all duration-300 hover:scale-105 active:scale-95"
          disabled={!hasQuestions || completed}
        >
          {completed ? (
            "Published"
          ) : (
            <>
              <Check className="h-3 w-3" />
              Publish Form
            </>
          )}
        </Button>
      </div>
    </>
  );
}
