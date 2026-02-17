"use client";

import { useEffect, useState, useCallback } from "react";

type Notification = {
  name: string;
  city: { sr: string; en: string };
  message: { sr: string; en: string };
};

// Each notification is a mini-story — specific context that doubles as a stealth sales argument
const notifications: Notification[] = [
  {
    name: "Milan",
    city: { sr: "Beograd", en: "Belgrade" },
    message: {
      sr: "Zatražio analizu jer mu Google Ads troši budžet bez konverzija",
      en: "Requested analysis — Google Ads spending budget with no conversions",
    },
  },
  {
    name: "Jelena",
    city: { sr: "Novi Sad", en: "Novi Sad" },
    message: {
      sr: "Popunila formu za besplatnu analizu svog eCommerce naloga",
      en: "Submitted form for a free eCommerce account analysis",
    },
  },
  {
    name: "Ivana",
    city: { sr: "Niš", en: "Niš" },
    message: {
      sr: "Zatražila konsultacije za njen SaaS brend",
      en: "Requested a consultation for her SaaS brand",
    },
  },
  {
    name: "Marko",
    city: { sr: "Kragujevac", en: "Kragujevac" },
    message: {
      sr: "Započeo saradnju nakon što smo mu uštedeli 40% budžeta",
      en: "Started working with us after we saved him 40% of his budget",
    },
  },
  {
    name: "Grant",
    city: { sr: "London, UK", en: "London, UK" },
    message: {
      sr: "Popunio formu za analizu svog Shopify naloga",
      en: "Submitted form for his Shopify account analysis",
    },
  },
  {
    name: "Stefan",
    city: { sr: "Subotica", en: "Subotica" },
    message: {
      sr: "Prešao sa agencije kod nas jer nije imao uvid u rezultate",
      en: "Switched from his agency — had no visibility into results",
    },
  },
  {
    name: "Ana",
    city: { sr: "Čačak", en: "Čačak" },
    message: {
      sr: "Zatražila audit jer joj CPA raste 3 meseca zaredom",
      en: "Requested an audit — CPA rising for 3 months straight",
    },
  },
  {
    name: "Nikola",
    city: { sr: "Zagreb, HR", en: "Zagreb, HR" },
    message: {
      sr: "Zakupio Standard paket za svoju B2B firmu",
      en: "Signed up for Standard plan for his B2B company",
    },
  },
  {
    name: "Dragana",
    city: { sr: "Pančevo", en: "Pančevo" },
    message: {
      sr: "Popunila formu — prvi put pokreće Google Ads",
      en: "Submitted form — launching Google Ads for the first time",
    },
  },
  {
    name: "Luka",
    city: { sr: "Novi Sad", en: "Novi Sad" },
    message: {
      sr: "Zatražio konsultaciju jer mu agencija ne šalje izveštaje",
      en: "Requested consultation — his agency never sends reports",
    },
  },
  {
    name: "Sarah",
    city: { sr: "Manchester, UK", en: "Manchester, UK" },
    message: {
      sr: "Zatražila besplatnu analizu za njen skincare brend",
      en: "Requested a free analysis for her skincare brand",
    },
  },
  {
    name: "Maja",
    city: { sr: "Beograd", en: "Belgrade" },
    message: {
      sr: "Zakupila Starter paket za svoju online prodavnicu",
      en: "Signed up for Starter plan for her online store",
    },
  },
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

type QueueItem = {
  name: string;
  city: string;
  message: string;
  time: string;
};

export function SocialProofToast({ locale }: { locale: string }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [queue, setQueue] = useState<QueueItem[]>([]);

  // Build a shuffled queue of notifications on mount
  const buildQueue = useCallback(() => {
    const shuffled = shuffle(notifications);

    return shuffled.map((notif) => ({
      name: notif.name,
      city: locale === "en" ? notif.city.en : notif.city.sr,
      message: locale === "en" ? notif.message.en : notif.message.sr,
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

    // Hide after 5 seconds (slightly longer — messages are longer now)
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next after 20-30 seconds (randomized interval)
    const nextDelay = 20000 + Math.floor(Math.random() * 10000);
    const nextTimeout = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= queue.length) {
        // Reshuffle and start over with new times
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
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-sm flex items-start gap-3">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
          ✅
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-900 font-semibold leading-tight">
            {item.name}, {item.city}
          </p>
          <p className="text-xs text-gray-600 leading-snug mt-0.5">
            {item.message}
          </p>
          <p className="text-[11px] text-gray-400 mt-1">{item.time}</p>
        </div>
      </div>
    </div>
  );
}
