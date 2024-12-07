"use client";


import React from 'react';
import FormPreview from './FormPreview';
import FormDesigner from './FormDesigner';
import { useFormContext } from '@/context/FormContext';

export default function FormBuilder() {
  const { isPreview, setIsPreview } = useFormContext();

  return (
    <div className="min-h-screen bg-gray-50 py-8 rounded-md">
      {isPreview ? (
        <FormPreview onDesginerClick={() => setIsPreview(false)} />
      ) : (
        <FormDesigner onPreviewClick={() => setIsPreview(true)} />
      )}
    </div>
  );
}