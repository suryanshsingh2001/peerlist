"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { validateQuestion } from "@/lib/utils";
import { toastMessage } from "@/lib/toast";

export default function DesignFormHeader() {
  const { formTitle, setFormTitle, questions } = useFormContext();

  const hasQuestions = questions.length > 0;

  const handlePreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasQuestions) {
      e.preventDefault();
    }
    if (!validateQuestion(questions)) {
      e.preventDefault();
      toastMessage({
        message: "Please fill out all questions",
        description: "All questions must have a title",
      });
      return;
    }

    if (formTitle === "") {
      setFormTitle("Untitled Form");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-2 mx-2">
        <Input
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Untitled form"
          className="text-lg placeholder:text-gray-400 font-semibold bg-transparent border-0 p-0 max-w-[calc(100%-100px)] focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Link href="/preview" className="" onClick={handlePreview}>
          <Button
            variant="outline"
            disabled={!hasQuestions}
            className="shrink-0 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1"
          >
            <span className="">Preview</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <Separator />
    </>
  );
}
