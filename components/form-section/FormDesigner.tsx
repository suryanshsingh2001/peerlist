import React, { useState } from "react";
import { useFormContext } from "@/context/FormContext";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import QuestionCard from "../form-block/QuestionCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import QuestionTypeSelect from "../form-block/QuestionTypeSelect";
import { Question } from "@/lib/types";
import { PlusCircle } from "lucide-react";
import FormSubmissions from "./FormSubmissions";
import DesignFormHeader from "../layout/design-form-header";

export default function FormDesigner() {
  const { questions, setQuestions, formTitle, setFormTitle } = useFormContext();
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validateQuestion = (question: Question): boolean => {
    return question.question.trim() !== "";
  };

  const addQuestion = (type: string) => {
    const newQuestion: Question = {
      id: `q${questions.length + 1}`,
      type,
      question: "",
      helpText: "",
      options: type === "single_select" ? ["Option 1", "Option 2"] : undefined,
      placeholder: type === "url" ? "https://" : undefined,
    };
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (index: number, updatedQuestion: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setErrors((prev) => ({
      ...prev,
      [updatedQuestion.id]: !validateQuestion(updatedQuestion),
    }));
    setQuestions(newQuestions);
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const duplicateQuestion = (index: number) => {
    const questionToDuplicate = questions[index];
    const duplicatedQuestion = {
      ...questionToDuplicate,
      id: `q${questions.length + 1}`,
    };
    const newQuestions = [...questions];
    newQuestions.splice(index + 1, 0, duplicatedQuestion);
    setQuestions(newQuestions);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setQuestions(items);
  };

  return (
    <div className="flex flex-1 flex-col max-w-4xl mx-2 border border-red-800 p-2 ">
      <>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="questions">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {questions.map((question, index) => (
                  <Draggable
                    key={question.id}
                    draggableId={question.id}
                    index={index}
                  >
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <QuestionCard
                          question={question}
                          onUpdate={(updatedQuestion) =>
                            updateQuestion(index, updatedQuestion)
                          }
                          onDelete={() => deleteQuestion(index)}
                          onDuplicate={() => duplicateQuestion(index)}
                          dragHandleProps={provided.dragHandleProps}
                          error={errors[question.id]}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="flex justify-center">
          <QuestionTypeSelect onSelect={addQuestion}>
            <Button variant="outline" size="sm">
              <PlusCircle className=" h-5 w-5" />
              Add Question
            </Button>
          </QuestionTypeSelect>
        </div>
      </>
    </div>
  );
}
