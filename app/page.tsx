"use client";
import DesignFormHeader from "@/components/layout/FormHeader";
import DesignFormFooter from "@/components/layout/FormFooter";
import FormDesigner from "@/components/form/FormDesigner";
import { Card } from "@/components/ui/card";
export default function Home() {
  return (
    <Card className="container flex flex-col min-h-screen mx-auto w-full max-w-2xl rounded-none">
      <DesignFormHeader />
      <FormDesigner />

      <DesignFormFooter />
    </Card>
  );
}
