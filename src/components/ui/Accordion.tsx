"use client";

import { useState } from "react";

type AccordionItem = {
  title: string;
  content: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.title}
            className="border-2 border-gray-900 rounded-lg bg-white"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between px-4 py-4 text-left font-medium"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="px-4 pb-4 text-gray-600">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
