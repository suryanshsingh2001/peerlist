import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  console.log('Form data received:', formData);

  // Respond with a success message
  return NextResponse.json({ message: 'Form data saved successfully' });
}