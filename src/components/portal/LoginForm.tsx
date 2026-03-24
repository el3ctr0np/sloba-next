"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight, AlertCircle } from "lucide-react";

export function LoginForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/portal/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessCode: code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      // Redirect to client report page
      router.push(`/sr/klijenti/${data.slug}`);
    } catch {
      setError("Greška u vezi. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
      <div>
        <label
          htmlFor="accessCode"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Pristupni kod
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            id="accessCode"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Unesite kod"
            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg tracking-widest font-mono uppercase text-white placeholder:text-slate-600"
            maxLength={12}
            autoComplete="off"
            required
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading || code.length < 6}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Proverava se..." : "Otvori izveštaj"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="text-xs text-slate-600 text-center">
        Pristupni kod ste dobili od vašeg account menadžera.
      </p>
    </form>
  );
}
