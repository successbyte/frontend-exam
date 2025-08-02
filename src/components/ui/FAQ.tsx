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
      className="w-full "
    >
      {accordionData.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          {/* I do not want the text to be underlined when hover */}
          <AccordionTrigger className="py-2 pr-2 text-left focus:outline-none">
            {item.title}
          </AccordionTrigger>
          {/* I want the description text to get the entire line and pretty */}
          <AccordionContent className="py-2 pr-6 md:pr-10 dark:text-gray-200 text-pretty">
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
