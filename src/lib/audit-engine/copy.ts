/**
 * Audit engine — every user-facing string the wizard needs, in one shape.
 * A second audit (the 105-point checklist) supplies its own AuditCopy object
 * and reuses the components untouched.
 *
 * SR copy: vi-forma, no em-dash or en-dash (WRITING_STANDARDS). Interface terms
 * that people actually see in Google Ads stay in English.
 */

import type { Answer, Effort, Priority } from "./types";
import type { Quadrant, RankKey } from "./scoring";
import type { PluralForms } from "./format";

export type AuditCopy = {
  answers: Record<Answer, string>;
  answerHints: Record<Answer, string>;
  priority: Record<Priority, string>;
  priorityLong: Record<Priority, string>;
  effort: Record<Effort, string>;
  ranks: Record<RankKey, { title: string; blurb: string }>;
  quadrants: Record<Quadrant, { title: string; hint: string }>;

  // Wizard chrome
  intro: {
    eyebrow: string;
    title: string;
    lead: string;
    start: string;
    resume: string;
    restart: string;
    /** Template with {answered} and {total}. */
    resumeNote: string;
    howTitle: string;
    how: string[];
    noEmail: string;
    /** Honest up-front framing: how long, and what you need to answer these. */
    timeEstimate: string;
    forWhomTitle: string;
    forWhom: string;
  };
  wizard: {
    /** Template with {i} and {n}. */
    groupOf: string;
    /** Template with {answered} and {total}. */
    progress: string;
    where: string;
    redFlag: string;
    prev: string;
    next: string;
    finish: string;
    remaining: PluralForms;
    groupDone: string;
    answerAllInGroup: PluralForms;
    backToStart: string;
    /** Shown on the finish button while the run is still incomplete. */
    finishPartial: string;
    /** Teaching layer. */
    goodExample: string;
    badExample: string;
    whyAsking: string;
    technicalName: string;
    readMore: string;
  };
  results: {
    eyebrow: string;
    title: string;
    scoreLabel: string;
    ofHundred: string;
    byGroup: string;
    naGroup: string;
    /** A group nobody answered yet — different from a group answered all-N/A. */
    groupNotChecked: string;
    /** Shown instead of a rank when every checkpoint was marked N/A. */
    allNa: { title: string; blurb: string };
    /** Banner on a partial run. Template with {answered} and {total}. */
    partialTitle: string;
    partialBody: string;
    finishRest: string;
    /** Per-finding affordances. */
    whereLabel: string;
    openInGuide: string;
    /** Export. */
    exportTitle: string;
    exportBody: string;
    copyReport: string;
    copied: string;
    printReport: string;
    showAsText: string;
    hideText: string;
    copyManually: string;
    p1Label: string;
    problemsLabel: string;
    unsureLabel: string;
    naLabel: string;
    matrixTitle: string;
    matrixLead: string;
    nothingToFix: string;
    reviewAgain: string;
    resetAll: string;
    resetConfirm: string;
    unsureNote: string;
    methodTitle: string;
    method: string;
  };
  gate: {
    title: string;
    lead: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    site: string;
    sitePlaceholder: string;
    submit: string;
    privacy: string;
  };
  cta: {
    lowTitle: string;
    lowBody: string;
    lowButton: string;
    highTitle: string;
    highBody: string;
    highButton: string;
    guideTitle: string;
    guideBody: string;
  };
};

export const pmaxCopySR: AuditCopy = {
  answers: { ok: "OK", problem: "Problem", unsure: "Ne znam", na: "N/A" },
  answerHints: {
    ok: "Provereno i podešeno kako treba",
    problem: "Provereno, nije kako treba",
    unsure: "Niste sigurni ili niste stigli da proverite",
    na: "Ne odnosi se na vašu kampanju",
  },
  priority: { P1: "P1", P2: "P2", P3: "P3" },
  priorityLong: {
    P1: "P1 - košta vas novac sada",
    P2: "P2 - bitno, ali ne gori",
    P3: "P3 - higijena naloga",
  },
  effort: { low: "mali napor", medium: "srednji napor", high: "veći napor" },
  ranks: {
    solid: {
      title: "Nalog stoji dobro",
      blurb:
        "Osnove su na mestu. Ono što je ostalo je fino podešavanje, ne gašenje požara.",
    },
    leaking: {
      title: "Radi, ali curi",
      blurb:
        "Kampanja funkcioniše, ali nekoliko kontrola radi protiv vas. To su obično i najjeftinije popravke.",
    },
    half: {
      title: "Pola posla",
      blurb:
        "Podešeno je taman toliko da troši budžet, ali ne toliko da ga troši pametno.",
    },
    adrift: {
      title: "PMax vozi, vi ste suvozač",
      blurb:
        "Previše kontrola je ostavljeno na podrazumevanim vrednostima. Dok se to ne promeni, teško je i reći šta kampanja zapravo radi.",
    },
  },
  quadrants: {
    quickWin: { title: "Kreni odavde", hint: "veliki uticaj, mali napor" },
    project: { title: "Vredi, ali traži rad", hint: "veliki uticaj, veći napor" },
    later: { title: "Usput, kad ste već tu", hint: "manji uticaj, mali napor" },
    backlog: { title: "Za kasnije", hint: "manji uticaj, veći napor" },
  },
  intro: {
    eyebrow: "Besplatan alat",
    title: "PMax Check",
    lead: "Prođite kroz 38 tačaka provere Performance Max kampanje. Dobijate ocenu po grupi i ukupno, plus redosled popravki po odnosu uticaja i napora. Bez ostavljanja emaila.",
    start: "Krenite sa proverom",
    resume: "Nastavite gde ste stali",
    restart: "Krenite iz početka",
    resumeNote: "Imate sačuvan progres: {answered} od {total} tačaka je odgovoreno.",
    howTitle: "Kako radi",
    how: [
      "38 tačaka u 8 grupa, isto onako kako su poređane u vodiču. Za svaku piše gde se u interfejsu proverava i šta je crveni signal.",
      "Odgovarate OK, Problem, Ne znam ili N/A. Ne znam se računa kao pola problema, N/A ispada iz računice.",
      "Skor je ponderisan: P1 tačka vredi tri puta više od P3. Dobijate skor po grupi i ukupan skor.",
      "Progres se čuva u vašem pregledaču, možete da zatvorite stranicu i vratite se.",
    ],
    noEmail: "Alat radi bez emaila. Email tražim samo ako hoćete pun izveštaj u inbox.",
    timeEstimate: "Ceo prolaz traje 15 do 20 minuta. Ne morate odjednom: rezultat možete videti i na pola puta, a progres vas čeka kad se vratite.",
    forWhomTitle: "Za koga je",
    forWhom: "Provera traži da tokom popunjavanja gledate u Google Ads nalog, jer se za svaku tačku pita nešto konkretno iz interfejsa. Radi se najlakše ako sami vodite kampanje ili imate pristup nalogu. Ako nemate pristup, ovo je lista pitanja koju možete postaviti onome ko vam vodi nalog.",
  },
  wizard: {
    groupOf: "Grupa {i} od {n}",
    progress: "{answered} / {total} odgovoreno",
    where: "Gde",
    redFlag: "Crveni signal",
    prev: "Nazad",
    next: "Sledeća grupa",
    finish: "Vidite rezultat",
    remaining: {
      one: "Ostala je još {n} tačka",
      few: "Ostale su još {n} tačke",
      other: "Ostalo je još {n} tačaka",
    },
    groupDone: "Grupa završena",
    answerAllInGroup: {
      one: "Još {n} tačka u ovoj grupi",
      few: "Još {n} tačke u ovoj grupi",
      other: "Još {n} tačaka u ovoj grupi",
    },
    backToStart: "Nazad na početak",
    finishPartial: "Vidite rezultat dosad",
    goodExample: "Ovako treba",
    badExample: "Ovako ne treba",
    whyAsking: "Zašto ovo pitam",
    technicalName: "Stručni naziv ove provere",
    readMore: "Ako hoćete dublje",
  },
  results: {
    eyebrow: "Rezultat",
    title: "Vaš PMax skor",
    scoreLabel: "ukupan skor",
    ofHundred: "/ 100",
    byGroup: "Skor po grupi",
    naGroup: "cela grupa označena kao N/A",
    groupNotChecked: "još nije provereno",
    allNa: {
      title: "Nema šta da se oceni",
      blurb:
        "Sve tačke su označene kao N/A, pa nema osnove za skor. Vratite se na proveru i odgovorite bar na tačke koje se odnose na vašu kampanju.",
    },
    partialTitle: "Ovo je delimičan rezultat",
    partialBody:
      "Odgovorili ste na {answered} od {total} tačaka. Skor računa samo ono što ste stvarno proverili, pa je tačan za taj deo, ali ne pokriva ceo nalog.",
    finishRest: "Odgovorite na ostatak",
    whereLabel: "Gde",
    openInGuide: "Otvorite u vodiču",
    exportTitle: "Ponesite nalaz sa sobom",
    exportBody:
      "Kopirajte nalaz kao tekst ili ga odštampajte. Korisno ako proveru radite za nekog drugog, ili ako hoćete da tačan spisak pošaljete onome ko vam vodi nalog.",
    copyReport: "Kopirajte nalaz",
    copied: "Kopirano",
    printReport: "Odštampajte",
    showAsText: "Prikažite kao tekst",
    hideText: "Sakrijte tekst",
    copyManually: "Kopiranje jednim klikom nije prošlo u vašem pregledaču. Tekst je ispod, označite ga i kopirajte ručno.",
    p1Label: "P1 problema",
    problemsLabel: "problema ukupno",
    unsureLabel: "puta Ne znam",
    naLabel: "puta N/A",
    matrixTitle: "Odakle da krenete",
    matrixLead:
      "Svaka tačka koju ste označili kao Problem ili Ne znam, poređana po tome koliko vas košta i koliko posla traži.",
    nothingToFix:
      "Nijedna tačka nije označena kao Problem ni kao Ne znam. Ako je provera bila iskrena, ova kampanja je u redu.",
    reviewAgain: "Vratite se na proveru",
    resetAll: "Obrišite odgovore",
    resetConfirm: "Ovo briše sve odgovore i vraća proveru na početak. Nastavljate?",
    unsureNote:
      "Ne znam nije neuspeh, to je podatak. Svaka takva tačka je kontrola za koju trenutno niko ne može da kaže da li radi u vašu korist.",
    methodTitle: "Kako se skor računa",
    method:
      "Svaka tačka nosi težinu po prioritetu: P1 = 3, P2 = 2, P3 = 1. OK nosi punu težinu, Ne znam pola, Problem nula. N/A tačke ispadaju iz imenioca pa ne obaraju skor. Skor je zbir osvojenog podeljen zbirom mogućeg, na 100.",
  },
  gate: {
    title: "Pošaljite mi pun izveštaj",
    lead: "Skor, raspored po grupama i lista svega što ste označili kao problem, na email. Uz to vam odgovorim šta bih na vašem mestu popravio prvo.",
    name: "Ime",
    namePlaceholder: "Vaše ime",
    email: "Email",
    emailPlaceholder: "vas@email.com",
    site: "Sajt ili domen",
    sitePlaceholder: "vasadomen.rs",
    submit: "Pošaljite mi izveštaj",
    privacy: "Bez spama i bez liste. Izveštaj i eventualno moje pitanje ako mi nešto ne bude jasno.",
  },
  cta: {
    lowTitle: "Ovo je više od jedne popravke",
    lowBody:
      "Kada se ovoliko tačaka nakupi, redosled je bitniji od same liste. Plaćeni audit je taj posao urađen umesto vas: prolazim kroz nalog, vraćam nalaz i plan po prioritetu. Cena je od €450.",
    lowButton: "Pogledajte plaćeni audit",
    highTitle: "Zapeli ste na nekoj tački?",
    highBody:
      "Provera pokazuje šta da gledate. Ako hoćete da neko prođe kroz nalog umesto vas i vrati konkretan plan, to je plaćeni audit. Cena je od €450.",
    highButton: "Pogledajte plaćeni audit",
    guideTitle: "Pun vodič uz svaku tačku",
    guideBody:
      "Kontekst za svih 38 tačaka: zašto je tačka tu, šta tačno tražite u interfejsu i šta znači loš odgovor.",
  },
};

export const pmaxCopyEN: AuditCopy = {
  answers: { ok: "OK", problem: "Problem", unsure: "Not sure", na: "N/A" },
  answerHints: {
    ok: "Checked and set up correctly",
    problem: "Checked, and it is not right",
    unsure: "You are not sure, or have not looked yet",
    na: "Does not apply to your campaign",
  },
  priority: { P1: "P1", P2: "P2", P3: "P3" },
  priorityLong: {
    P1: "P1 — costing you money now",
    P2: "P2 — matters, but not on fire",
    P3: "P3 — account hygiene",
  },
  effort: { low: "low effort", medium: "medium effort", high: "bigger job" },
  ranks: {
    solid: {
      title: "Running as it should",
      blurb:
        "The fundamentals are in place. What is left is tuning, not firefighting.",
    },
    leaking: {
      title: "Working, but leaking",
      blurb:
        "The campaign runs, but a handful of controls are working against you. Those are usually the cheapest things to fix.",
    },
    half: {
      title: "Half the job",
      blurb:
        "Set up enough to spend the budget, not enough to spend it well.",
    },
    adrift: {
      title: "PMax is driving",
      blurb:
        "Too many controls are still sitting on their defaults. Until that changes it is hard to say what the campaign is actually doing.",
    },
  },
  quadrants: {
    quickWin: { title: "Start here", hint: "high impact, low effort" },
    project: { title: "Worth it, but a project", hint: "high impact, bigger job" },
    later: { title: "While you are in there", hint: "lower impact, low effort" },
    backlog: { title: "Backlog", hint: "lower impact, bigger job" },
  },
  intro: {
    eyebrow: "Free tool",
    title: "PMax Check",
    lead: "Work through 38 Performance Max checkpoints and get a score per group and overall, plus the order to fix things in, weighed by impact against effort. No email required.",
    start: "Start the check",
    resume: "Pick up where you left off",
    restart: "Start over",
    resumeNote: "You have saved progress: {answered} of {total} checkpoints answered.",
    howTitle: "How it works",
    how: [
      "38 checkpoints across 8 groups, in the same order as the guide. Each one tells you where to look in the interface and what a bad answer looks like.",
      "You answer OK, Problem, Not sure or N/A. Not sure counts as half a problem, N/A drops out of the maths entirely.",
      "The score is weighted: a P1 checkpoint is worth three times a P3. You get a score per group and an overall score.",
      "Progress is saved in your browser, so you can close the page and come back.",
    ],
    noEmail: "The tool works without an email. I only ask for one if you want the full report in your inbox.",
    timeEstimate: "A full pass takes 15 to 20 minutes. You do not have to do it in one sitting: you can see a result halfway through, and your progress waits for you.",
    forWhomTitle: "Who this is for",
    forWhom: "The check assumes you have the Google Ads account open while you answer, because every checkpoint asks something specific about the interface. Easiest if you run the campaigns yourself or have account access. If you do not, this is a list of questions to put to whoever does.",
  },
  wizard: {
    groupOf: "Group {i} of {n}",
    progress: "{answered} / {total} answered",
    where: "Where",
    redFlag: "Red flag",
    prev: "Back",
    next: "Next group",
    finish: "See your result",
    remaining: {
      one: "{n} checkpoint left",
      other: "{n} checkpoints left",
    },
    groupDone: "Group complete",
    answerAllInGroup: {
      one: "{n} checkpoint left in this group",
      other: "{n} checkpoints left in this group",
    },
    backToStart: "Back to the start",
    finishPartial: "See the result so far",
    goodExample: "What good looks like",
    badExample: "What bad looks like",
    whyAsking: "Why I am asking",
    technicalName: "The technical name for this check",
    readMore: "If you want to go deeper",
  },
  results: {
    eyebrow: "Result",
    title: "Your PMax score",
    scoreLabel: "overall score",
    ofHundred: "/ 100",
    byGroup: "Score by group",
    naGroup: "whole group marked N/A",
    groupNotChecked: "not checked yet",
    allNa: {
      title: "Nothing to score",
      blurb:
        "Every checkpoint is marked N/A, so there is no basis for a score. Go back and answer at least the checkpoints that do apply to your campaign.",
    },
    partialTitle: "This is a partial result",
    partialBody:
      "You answered {answered} of {total} checkpoints. The score counts only what you actually checked, so it is accurate for that slice, but it does not cover the whole account.",
    finishRest: "Answer the rest",
    whereLabel: "Where",
    openInGuide: "Open in the guide",
    exportTitle: "Take the findings with you",
    exportBody:
      "Copy the findings as text or print them. Useful if you are running the check for someone else, or if you want to send the exact list to whoever manages the account.",
    copyReport: "Copy the findings",
    copied: "Copied",
    printReport: "Print",
    showAsText: "Show as text",
    hideText: "Hide the text",
    copyManually: "One-click copy did not go through in your browser. The text is below — select it and copy by hand.",
    p1Label: "P1 problems",
    problemsLabel: "problems total",
    unsureLabel: "not sure",
    naLabel: "marked N/A",
    matrixTitle: "Where to start",
    matrixLead:
      "Every checkpoint you marked Problem or Not sure, sorted by what it costs you against how much work it is.",
    nothingToFix:
      "Nothing came back as a Problem or a Not sure. If the check was honest, this campaign is in good shape.",
    reviewAgain: "Back to the checkpoints",
    resetAll: "Clear my answers",
    resetConfirm: "This clears every answer and restarts the check. Continue?",
    unsureNote:
      "Not sure is not a failure, it is data. Each one is a control nobody can currently say is working in your favour.",
    methodTitle: "How the score is calculated",
    method:
      "Every checkpoint carries a weight by priority: P1 = 3, P2 = 2, P3 = 1. OK earns full weight, Not sure earns half, Problem earns nothing. N/A checkpoints leave the denominator, so they cannot drag the score down. The score is credit earned over credit available, out of 100.",
  },
  gate: {
    title: "Send me the full report",
    lead: "Your score, the group breakdown and every checkpoint you flagged, by email. I will also tell you what I would fix first if it were my account.",
    name: "First name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@email.com",
    site: "Site or domain",
    sitePlaceholder: "yourdomain.com",
    submit: "Send me the report",
    privacy: "No spam, no mailing list. The report, and a question back from me if something is unclear.",
  },
  cta: {
    lowTitle: "This is more than one fix",
    lowBody:
      "Once this many checkpoints stack up, the order matters more than the list. The paid audit is that work done for you: I go through the account and come back with the findings and a plan in priority order. It starts from $500.",
    lowButton: "See the paid audit",
    highTitle: "Stuck on one of the checkpoints?",
    highBody:
      "The check shows you what to look at. If you want someone to go through the account for you and come back with a concrete plan, that is the paid audit. It starts from $500.",
    highButton: "See the paid audit",
    guideTitle: "The full guide behind every checkpoint",
    guideBody:
      "Context for all 38: why the checkpoint is there, what exactly you are looking for in the interface, and what a bad answer means.",
  },
};
