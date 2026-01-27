"use client";

import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-6">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-heading font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-heading font-semibold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-heading font-semibold mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />;
}
