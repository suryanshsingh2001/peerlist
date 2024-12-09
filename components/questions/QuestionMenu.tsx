import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Trash, Clipboard } from "lucide-react";

interface QuestionMenuContainerProps {
  children: React.ReactNode;
  onDelete: () => void;
  onDuplicate: () => void;
}

export function QuestionMenuContainer({
  children,
  onDelete,
  onDuplicate,
}: QuestionMenuContainerProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      
      <ContextMenuContent>
        <ContextMenuItem onClick={onDuplicate}>
          <div className="flex items-center space-x-2 justify-center">
            <Clipboard className="h-4 w-4" />
            <span className="text-sm font-medium">Duplicate</span>
          </div>
        </ContextMenuItem>
        <ContextMenuItem onClick={onDelete}>
        <div className="flex items-center space-x-2 justify-center">
            <Trash className="h-4 w-4" />
            <span className="text-sm font-medium">Delete</span>
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
