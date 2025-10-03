import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function FAQ({ faq }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{faq.q}</AccordionTrigger>
        <AccordionContent>{faq.a}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQ;
