
import React, { useState } from 'react';
import { useFormContext } from '@/context/FormContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Question } from '@/lib/types';

export default function FormPreview({ onDesginerClick }: { onDesginerClick: () => void }) {
  const { questions, formTitle } = useFormContext();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Thank you for your submission!",
    });
  };

  const calculateProgress = () => {
    if (questions.length === 0) return 0;
    const answeredQuestions = Object.keys(answers).filter(
      (key) => answers[key].trim() !== ""
    ).length;
    return Math.round((answeredQuestions / questions.length) * 100);
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case 'short_answer':
        return (
          <Input
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case 'long_answer':
        return (
          <Textarea
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case 'single_select':
        return (
          <RadioGroup
            value={answers[question.id]}
            onValueChange={(value) => handleAnswerChange(question.id, value)}
          >
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'number':
        return (
          <Input
            type="number"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          />
        );
      case 'url':
        return (
          <Input
            type="url"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="https://"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Card>
        <CardHeader className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold">{formTitle}</h1>
            <Button onClick={onDesginerClick} variant="outline" className="mt-4">
              Edit Form
            </Button>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-sm text-gray-500">
              Form completeness — {calculateProgress()}%
            </span>
            <Progress value={calculateProgress()} className="w-32" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {questions.map((question) => (
              <div key={question.id} className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-base font-medium">
                    {question.question}
                  </Label>
                  {question.helpText && (
                    <p className="text-sm text-muted-foreground">
                      {question.helpText}
                    </p>
                  )}
                </div>
                {renderQuestionInput(question)}
              </div>
            ))}
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
}