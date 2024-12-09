import { toast } from "sonner";

interface Message {
  message: string;
  description?: string;
  action?:
    | {
        label: string;
        onClick: () => void;
      }
    | undefined;
}

export const toastMessage = (toastMessage: Message) => {
  toast(toastMessage.message, {
    description: toastMessage.description || "",
    action: toastMessage.action,
  });
};
