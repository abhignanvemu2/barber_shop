import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to book an appointment? or can I walk in?",
    answer: "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp",
  },
  {
    question: "How long does a haircut take?",
    answer:
      "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
  },
  {
    question: "What hair products do you use?",
    answer:
      "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
  },
  {
    question: "do you offer hair coloring services?",
    answer:
      "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
  },
  {
    question: "what form of payment do you accept?",
    answer:
"We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and Venmo for your convenience."  },
];

export function AccordionDemo() {
  return (
    <section className=" mx-auto p-6 dm-sans">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
      <Accordion type="single" collapsible className="w-full text-gray-500">
        {faqs.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className={"text-xl"}>{item.question}</AccordionTrigger>
            <AccordionContent className={"text-left text-gray-100"}>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
