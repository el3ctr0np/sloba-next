"use client";

import { useEffect, useState, useCallback } from "react";

type Person = {
  name: string;
  city: { sr: string; en: string };
};

type Action = {
  sr: string;
  en: string;
};

// Pool of people — random combination each time
const people: Person[] = [
  { name: "Miloš", city: { sr: "Niš", en: "Niš" } },
  { name: "Ana", city: { sr: "Novi Sad", en: "Novi Sad" } },
  { name: "Marko", city: { sr: "Beograd", en: "Belgrade" } },
  { name: "Grant", city: { sr: "London, UK", en: "London, UK" } },
  { name: "Jelena", city: { sr: "Zagreb, HR", en: "Zagreb, HR" } },
  { name: "Stefan", city: { sr: "Kragujevac", en: "Kragujevac" } },
  { name: "Ivana", city: { sr: "Subotica", en: "Subotica" } },
  { name: "Nikola", city: { sr: "Čačak", en: "Čačak" } },
];

// Pool of actions — diverse enough to stay fresh
const actions: Action[] = [
  { sr: "zatražio/la besplatnu analizu", en: "requested a free analysis" },
  { sr: "započeo/la saradnju", en: "started a partnership" },
  { sr: "zakupio/la Standard paket", en: "signed up for Standard plan" },
  { sr: "skalirao/la budžet 2x", en: "scaled budget 2x" },
  { sr: "zatražio/la konsultaciju", en: "requested a consultation" },
  { sr: "zakupio/la Starter paket", en: "signed up for Starter plan" },
];

// Generate random time string — different each render
function getRandomTime(locale: string): string {
  const rand = Math.random();

  if (rand < 0.3) {
    // Hours ago (1-23)
    const hours = Math.floor(Math.random() * 23) + 1;
    return locale === "en" ? `${hours}h ago` : `pre ${hours}h`;
  } else if (rand < 0.7) {
    // Days ago (1-5)
    const days = Math.floor(Math.random() * 5) + 1;
    if (locale === "en") {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    return days === 1 ? "pre 1 dan" : `pre ${days} dana`;
  } else {
    // This week
    return locale === "en" ? "this week" : "ove nedelje";
  }
}

// Shuffle array (Fisher-Yates)
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function SocialProofToast({ locale }: { locale: string }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [queue, setQueue] = useState<
    { name: string; city: string; action: string; time: string }[]
  >([]);

  // Build a shuffled queue of notifications on mount
  const buildQueue = useCallback(() => {
    const shuffledPeople = shuffle(people);
    const shuffledActions = shuffle(actions);

    return shuffledPeople.map((person, i) => ({
      name: person.name,
      city: locale === "en" ? person.city.en : person.city.sr,
      action:
        locale === "en"
          ? shuffledActions[i % shuffledActions.length].en
          : shuffledActions[i % shuffledActions.length].sr,
      time: getRandomTime(locale),
    }));
  }, [locale]);

  useEffect(() => {
    setQueue(buildQueue());
  }, [buildQueue]);

  useEffect(() => {
    if (queue.length === 0) return;

    // First notification after 8 seconds
    const initialTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, [queue]);

  useEffect(() => {
    if (currentIndex < 0 || queue.length === 0) return;

    // Hide after 4 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    // Show next after 20-30 seconds (randomized interval)
    const nextDelay = 20000 + Math.floor(Math.random() * 10000);
    const nextTimeout = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= queue.length) {
        // Reshuffle and start over
        setQueue(buildQueue());
        setCurrentIndex(0);
      } else {
        setCurrentIndex(nextIndex);
      }
      setIsVisible(true);
    }, nextDelay);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [currentIndex, queue, buildQueue]);

  if (currentIndex < 0 || !queue[currentIndex]) return null;

  const item = queue[currentIndex];

  return (
    <div
      className={`fixed bottom-20 left-4 md:bottom-6 md:left-6 z-40 transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs flex items-start gap-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
          ✅
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-900 font-medium leading-tight">
            {item.name} {locale === "en" ? "from" : "iz"} {item.city}
          </p>
          <p className="text-xs text-gray-500 leading-tight mt-0.5">
            {item.action} — {item.time}
          </p>
        </div>
      </div>
    </div>
  );
}
