// app/api/saveForm/route.ts
import { NextRequest, NextResponse } from "next/server";

let submittedForms: any = [];

export async function POST(req: NextRequest) {
  const formData = await req.json();
  submittedForms.push(formData);
  return NextResponse.json({ message: "Form data saved successfully" });
}
