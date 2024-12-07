"use client";

import { useFormContext } from "@/context/FormContext";
import { Separator } from "../ui/separator";
import { calculateProgress } from "@/lib/utils";
import { Progress } from "../ui/progress";

export default function PreviewHeader() {
  const { formTitle, questions, answers } = useFormContext();
  const progress = calculateProgress(questions, answers);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 mx-2">
        <h1 className="text-lg font-semibold mb-2 md:mb-0">
          {formTitle || "Untitled form"}
        </h1>
        <div className="flex flex-col items-start md:items-end gap-1.5">
          <span className="text-md text-gray-800">
            Form completeness —{" "}
            <span className="font-mono text-lg">{progress}%</span>
          </span>
          <Progress value={progress} className="w-full md:w-80 h-1" />
        </div>
      </div>
      <Separator />
    </>
  );
}