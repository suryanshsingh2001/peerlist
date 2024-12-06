import FormBuilder from "@/components/form-section/FormBuilder";
export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl min-h-screen p-2 border border-red-600">
      <div
        className="
      flex flex-col bg-white rounded-md border border-red-600
      "
      >
        <FormBuilder />
      </div>
    </div>
  );
}
