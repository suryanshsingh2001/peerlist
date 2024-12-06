"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FormSubmissions() {
  // This would typically fetch from an API
  const submissions = [
    {
      id: 1,
      submittedAt: new Date().toLocaleDateString(),
      completionRate: "100%",
      status: "Completed",
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Submission ID</TableHead>
            <TableHead>Submitted At</TableHead>
            <TableHead>Completion Rate</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>{submission.id}</TableCell>
              <TableCell>{submission.submittedAt}</TableCell>
              <TableCell>{submission.completionRate}</TableCell>
              <TableCell>{submission.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}