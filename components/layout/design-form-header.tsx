"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function DesignFormHeader() {
  const { formTitle, setFormTitle, questions } = useFormContext();

  const hasQuestions = questions.length > 0;

  return (
    <>
      <div className="flex items-center justify-between p-2 mx-2">
        <Input
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder="Untitled form"
          className="text-xl font-semibold bg-transparent border-0 p-0 w-[300px] focus-visible:ring-0"
        />
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled={!hasQuestions}>
            <Link href="/preview" className="flex items-center gap-1">
              <span>Preview</span>
              <ArrowUpRight className="h-4 w-4 " />
            </Link>
          </Button>
        </div>
      </div>

      <Separator />
    </>
  );
}
