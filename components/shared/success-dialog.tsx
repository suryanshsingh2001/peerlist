"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CheckCircle, PlusCircle, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedContainer } from "./animated-container";

interface SuccessDialogProps {
  onClose: () => void;
  open: boolean;
}

export function SuccessDialog({ onClose, open }: SuccessDialogProps) {
  const router = useRouter();

  const handleSubmitAnotherOne = () => {
    onClose();
  };

  const handleSeeSubmissions = () => {
    router.push("/submissions");
  };

  return (
    <Dialog open={open}>
      <AnimatedContainer animation="scale">
        <DialogContent className="sm:max-w-[425px] p-6 rounded-lg shadow-lg flex flex-col items-center">
          <DialogHeader className="flex items-center space-x-3">
            <CheckCircle className="h-10 w-10 text-green-500" />
            <DialogTitle className="text-xl font-semibold">
              Submission Successful
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="mt-2 text-gray-600 text-center">
            Your form has been successfully submitted. We will review it and get
            back to you shortly.
          </DialogDescription>
          <div className="mt-4 flex justify-center space-x-4">
            <Button
              onClick={handleSubmitAnotherOne}
              variant="default"
              className="flex items-center  transition-transform transform hover:scale-105"
            >
              <span>Submit Another</span>
            </Button>
            <Button
              onClick={handleSeeSubmissions}
              variant="secondary"
              className="flex items-center  transition-transform transform hover:scale-105"
            >
              <Eye className="h-5 w-5" />
              <span>View Submissions</span>
            </Button>
          </div>
        </DialogContent>
      </AnimatedContainer>
    </Dialog>
  );
}
