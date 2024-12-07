"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormHeader from "./FormHeader";
import QuestionCard from "../form-block/QuestionCard";
import { type Question } from "@/lib/types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import FormSubmissions from "./FormSubmissions";
import QuestionTypeSelect from "../form-block/QuestionTypeSelect";

interface FormDesignerProps {
  questions: Question[];
  onQuestionsUpdate: (questions: Question[]) => void;
  onPreviewClick: () => void;
  formTitle: string;
  onFormTitleChange: (title: string) => void;
}

export default function FormDesigner({
  questions,
  onQuestionsUpdate,
  onPreviewClick,
  formTitle,
  onFormTitleChange,
}: FormDesignerProps) {
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
    onQuestionsUpdate([...questions, newQuestion]);
  };

  const updateQuestion = (index: number, updatedQuestion: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    
    // Update error state
    setErrors(prev => ({
      ...prev,
      [updatedQuestion.id]: !validateQuestion(updatedQuestion)
    }));
    
    onQuestionsUpdate(newQuestions);
  };

  const deleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    onQuestionsUpdate(newQuestions);
  };

  const duplicateQuestion = (index: number) => {
    const questionToDuplicate = questions[index];
    const duplicatedQuestion = {
      ...questionToDuplicate,
      id: `q${questions.length + 1}`,
    };
    const newQuestions = [...questions];
    newQuestions.splice(index + 1, 0, duplicatedQuestion);
    onQuestionsUpdate(newQuestions);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onQuestionsUpdate(items);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <FormHeader
        title={formTitle}
        onTitleChange={onFormTitleChange}
        onPreviewClick={onPreviewClick}
        onToggleSubmissions={() => setShowSubmissions(!showSubmissions)}
        showSubmissions={showSubmissions}
      />

      {showSubmissions ? (
        <FormSubmissions />
      ) : (
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
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
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

          <div className="flex justify-center mt-8">
            <QuestionTypeSelect onSelect={addQuestion}>
              <Button variant="outline" size="lg">
                <PlusCircle className="mr-2 h-5 w-5" />
                Add Question
              </Button>
            </QuestionTypeSelect>
          </div>
        </>
      )}
    </div>
  );
}