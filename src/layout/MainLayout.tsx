import * as React from "react";
import { accordionData } from "@/data/accordionData";
import { FAQ } from "@/components/ui/FAQ";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto p-4">
      <FAQ accordionData={accordionData} defaultValue="1" />
    </main>
  );
}
