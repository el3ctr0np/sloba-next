"use client";

import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/track";
import { getAskAiButtons } from "@/lib/askAiPrompts";

interface AskAIProps {
  locale: string;
}

export function AskAI({ locale }: AskAIProps) {
  const isEn = locale === "en";
  const buttons = getAskAiButtons(locale);

  const content = isEn
    ? {
        eyebrow: "INDEPENDENT CHECK",
        heading: "Ask AI about me",
        sub: "Instead of taking this site's word for it, put the question to an independent AI assistant. One click opens a conversation with a prepared question — the answer is formed by the AI from publicly available information, not by us. Feel free to edit the question.",
      }
    : {
        eyebrow: "NEZAVISNA PROVERA",
        heading: "Pitajte AI o meni",
        sub: "Umesto da verujete sajtu, postavite pitanje nezavisnom AI asistentu. Jedan klik otvara razgovor sa pripremljenim pitanjem — odgovor formira AI na osnovu javno dostupnih informacija, ne mi. Pitanje možete slobodno izmeniti.",
      };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="border-2 border-accent rounded-xl bg-white p-6 md:p-10 shadow-card">
          <span className="inline-block bg-accent text-slate-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 max-w-2xl">
            {content.heading}
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">{content.sub}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buttons.map(({ key, label, href, base, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick(key, base)}
                className="group flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="uppercase text-sm font-semibold tracking-wide text-gray-900">
                    {label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent-dark group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
