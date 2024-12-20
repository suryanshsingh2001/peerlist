import { FormProvider } from "@/context/FormContext";
import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peerlist - Form Builder",
  description: "Build forms with ease",
  openGraph: {
    title: "Peerlist - Form Builder",
    description: "Build forms with ease",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <FormProvider>
          {children}
          <Toaster />
        </FormProvider>
      </body>
    </html>
  );
}
