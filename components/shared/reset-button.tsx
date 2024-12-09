import React from "react";
import { Button } from "../ui/button";
import { RotateCw } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { toastMessage } from "@/lib/toast";

const ResetButton = () => {
  const { resetQuestions, questions } = useFormContext();
  const hasQuestions = questions.length > 0;

  const handleResetClick = () => {
    resetQuestions();
    toastMessage({ message: "Form questions are cleared" });
  };

  return (
    hasQuestions && (
      <div className="flex flex-1 flex-col justify-end items-end mt-4">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleResetClick}
          className="transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <RotateCw className="h-5 w-5" />
          Reset Form
        </Button>
      </div>
    )
  );
};

export default ResetButton;
