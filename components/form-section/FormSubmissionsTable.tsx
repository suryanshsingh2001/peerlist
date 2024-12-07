"use client"

import { useState, useMemo } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FormSubmission } from '@/lib/types'
interface FormSubmissionsTableProps {
  submissions: FormSubmission[]
}

export function FormSubmissionsTable({ submissions }: FormSubmissionsTableProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const filteredSubmissions = useMemo(() => {
    return submissions.filter(submission =>
      submission.formTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [submissions, searchTerm])

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search by form title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm"
      />
      <Accordion type="single" collapsible className="w-full">
        {filteredSubmissions.map((submission) => (
          <AccordionItem key={submission.id} value={`item-${submission.id}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between w-full pr-4">
                <span className="font-medium">{submission.formTitle}</span>
                <span className="text-sm text-gray-500">{submission.submittedAt}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Submission Details:</h4>
                  <p><strong>ID:</strong> {submission.id}</p>
                  <p><strong>Submitted At:</strong> {submission.submittedAt}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Questions and Answers:</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/2">Question</TableHead>
                        <TableHead className="w-1/2">Answer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submission.questions.map((question) => (
                        <TableRow key={question.id}>
                          <TableCell className="align-top">
                            <p className="font-medium">{question.question}</p>
                            <p className="text-sm text-gray-500">{question.helpText}</p>
                          </TableCell>
                          <TableCell>{submission.answers[question.id]}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

