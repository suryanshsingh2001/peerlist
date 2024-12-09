"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpDown, Eye } from "lucide-react";
import { FormSubmission } from "@/lib/types";
import { QUESTION_TYPES } from "@/lib/questionTypes";

interface FormSubmissionsTableProps {
  submissions: FormSubmission[];
}

export function FormSubmissionsTable({
  submissions,
}: FormSubmissionsTableProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const sortedAndFilteredSubmissions = useMemo(() => {
    let result = [...submissions];

    if (searchTerm) {
      result = result.filter((submission) =>
        submission.formTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime();
      const dateB = new Date(b.submittedAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [submissions, sortOrder, searchTerm]);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          placeholder="Search by form title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-[300px]"
        />
        <Button
          onClick={toggleSortOrder}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {sortOrder === "desc" ? "Latest First" : "Oldest First"}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Form Title</TableHead>
              <TableHead className="w-[200px]">Submitted At</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredSubmissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.id}</TableCell>
                <TableCell>{submission.formTitle}</TableCell>
                <TableCell>{submission.submittedAt}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {submission.formTitle} - Submission Details
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        {submission.questions.map((question) => (
                          <div
                            key={question.id}
                            className="bg-muted/30 p-4 rounded-md shadow-sm"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium">
                                {question.question}
                              </h5>
                              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full flex items-center space-x-2">
                                {QUESTION_TYPES[question.type].icon}
                                <span>
                                  {QUESTION_TYPES[question.type].label}
                                </span>
                              </span>
                            </div>
                            {question.helpText && (
                              <p className="text-sm text-muted-foreground mb-2">
                                {question.helpText}
                              </p>
                            )}
                            <p className="bg-background p-2 rounded">
                              {submission.answers[question.id]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
