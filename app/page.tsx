"use client";
import DesignFormHeader from "@/components/layout/design-form-header";
import DesignFormFooter from "@/components/layout/design-form-footer";
import FormDesigner from "@/components/form-section/FormDesigner";
import { Card } from "@/components/ui/card";
export default function Home() {
  return (
    <Card className="container flex flex-col min-h-screen mx-auto max-w-3xl rounded-none">
      <DesignFormHeader />
      <FormDesigner />

      <DesignFormFooter />
    </Card>
  );
}
