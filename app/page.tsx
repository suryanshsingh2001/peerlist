"use client";
import DesignFormHeader from "@/components/layout/design-form-header";
import DesignFormFooter from "@/components/layout/design-form-footer";
import FormDesigner from "@/components/form-section/FormDesigner";
export default function Home() {
  return (
    <main className="container flex flex-col min-h-screen mx-auto max-w-4xl rounded-md">
      <DesignFormHeader />
      <FormDesigner />
      <DesignFormFooter />
    </main>
  );
}
