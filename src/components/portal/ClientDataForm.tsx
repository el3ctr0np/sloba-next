"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

export function ClientDataForm() {
  const now = new Date();
  const defaultPeriod = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  const [period, setPeriod] = useState(defaultPeriod);
  const [phoneCalls, setPhoneCalls] = useState("");
  const [jobsCompleted, setJobsCompleted] = useState("");
  const [clientNote, setClientNote] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/portal/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          period,
          phoneCalls: phoneCalls ? Number(phoneCalls) : undefined,
          jobsCompleted: jobsCompleted ? Number(jobsCompleted) : undefined,
          clientNote: clientNote || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }

      setStatus("success");
      setPhoneCalls("");
      setJobsCompleted("");
      setClientNote("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Došlo je do greške.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-md mx-auto">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Podaci su sačuvani!
        </h3>
        <p className="text-sm text-green-600 mb-6">
          Vaši podaci za period {period} su uspešno uneti.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Unesi podatke za drugi period
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">
          Period
        </label>
        <input
          id="period"
          type="month"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneCalls" className="block text-sm font-medium text-gray-700 mb-1">
          Broj telefonskih poziva
        </label>
        <input
          id="phoneCalls"
          type="number"
          min="0"
          value={phoneCalls}
          onChange={(e) => setPhoneCalls(e.target.value)}
          placeholder="npr. 45"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="jobsCompleted" className="block text-sm font-medium text-gray-700 mb-1">
          Broj završenih poslova
        </label>
        <input
          id="jobsCompleted"
          type="number"
          min="0"
          value={jobsCompleted}
          onChange={(e) => setJobsCompleted(e.target.value)}
          placeholder="npr. 30"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="clientNote" className="block text-sm font-medium text-gray-700 mb-1">
          Napomena (opciono)
        </label>
        <textarea
          id="clientNote"
          value={clientNote}
          onChange={(e) => setClientNote(e.target.value)}
          placeholder="Dodatna napomena za ovaj mesec..."
          rows={3}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || (!phoneCalls && !jobsCompleted)}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Čuva se..." : "Sačuvaj podatke"}
      </button>
    </form>
  );
}
