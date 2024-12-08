import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { formTemplates } from "@/lib/formTemplates";
import { useFormContext } from "@/context/FormContext";
import { AnimatedContainer } from "./animated-container";
import { toastMessage } from "@/lib/toast";

export default function TemplateMenu() {
  const [open, setOpen] = useState(false);
  const { setQuestions, setFormTitle, questions } = useFormContext();

  const hasQuestions = questions.length > 0;

  const handleSelectTemplate = (templateIndex: number) => {
    toastMessage({
      message: `${formTemplates[templateIndex].formTitle} template selected`,
      description: "You can start working on it.",
    });
    setQuestions(formTemplates[templateIndex].questions);
    setFormTitle(formTemplates[templateIndex].formTitle);
    setOpen(false);
  };

  return (
    <>
      {!hasQuestions && (
        <AnimatedContainer
          className="flex justify-center"
          animation="scale"
          delay={0.5}
        >
          <span
            onClick={() => {
              setOpen(!open);
            }}
            className="text-muted-foreground text-center cursor-pointer p-2 mt-2"
          >
            or select a <span className="text-primary">template</span>
          </span>
        </AnimatedContainer>
      )}

      <CommandDialog
        open={open}
        onOpenChange={() => {
          setOpen(!open);
        }}
      >
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Form Templates">
              {formTemplates.map((template, index) => (
                <CommandItem
                  key={template.formTitle}
                  onSelect={() => handleSelectTemplate(index)}
                >
                  {template.formTitle}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
