import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AccordionEntry } from "@/data/accordionData";

interface FAQProps {
  accordionData: AccordionEntry[];
  defaultValue?: string;
}

export function FAQ({ accordionData, defaultValue }: FAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="w-full space-y-2"
    >
      {accordionData.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="p-4 bg-gray-100 dark:bg-gray-800">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="p-4 dark:text-gray-200">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
