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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpDown } from "lucide-react";
import { FormSubmission } from "@/lib/types";
import { formatDate } from "date-fns";

interface FormSubmissionsTableProps {
  submissions: FormSubmission[];
}

export function FormSubmissionsTable({
  submissions,
}: FormSubmissionsTableProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const sortedAndFilteredSubmissions = useMemo(() => {
    let result = [...submissions];

    // Apply filtering by form title
    if (searchTerm) {
      result = result.filter((submission) =>
        submission.formTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      const dateA = new Date(a.submittedAt).getTime();
      const dateB = new Date(b.submittedAt).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return result;
  }, [submissions, sortOrder, searchTerm]);

  const toggleExpand = (id: number) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

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
                <TableCell>
                  {formatDate(submission.submittedAt, "MM-dd-yyyy")}
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(submission.id)}
                  >
                    {expandedRows.has(submission.id) ? "Hide" : "See more"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Accordion type="multiple" value={Array.from(expandedRows).map(String)}>
        {sortedAndFilteredSubmissions.map((submission) => (
          <AccordionItem key={submission.id} value={String(submission.id)}>
            <AccordionTrigger className="hidden">Details</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Question ID</TableHead>
                    <TableHead className="w-1/4">Question Type</TableHead>
                    <TableHead className="w-1/4">Question</TableHead>
                    <TableHead className="w-1/4">Answer</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submission.questions.map((question) => (
                    <TableRow key={question.id}>
                      <TableCell>{question.id}</TableCell>
                      <TableCell>{question.type}</TableCell>
                      <TableCell>
                        <p>{question.question}</p>
                        <p className="text-sm text-gray-500">
                          {question.helpText}
                        </p>
                      </TableCell>
                      <TableCell>{submission.answers[question.id]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
