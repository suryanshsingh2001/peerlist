import { toast } from "sonner";

interface Message {
  message: string;
  description?: string;
}

export const toastMessage = (toastMessage: Message) => {
  toast(toastMessage.message, {
    description: toastMessage.description || "",
  });
};
