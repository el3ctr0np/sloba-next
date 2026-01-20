"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with newsletter service
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Hvala na prijavi!");
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-2xl text-center">
        <span className="text-4xl mb-4 block">📧</span>
        <h2 className="text-3xl font-heading font-bold mb-4">
          Budite u Toku sa Google Ads Novostima
        </h2>
        <p className="text-gray-600 mb-8">
          Prijavite se za newsletter i dobijajte najnovije informacije o Google Ads
          ažuriranjima, AI optimizacijama i strategijama koje donose rezultate.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vaš email"
            required
            className="px-4 py-3 border-2 border-gray-900 rounded-md flex-1 max-w-md focus:outline-none focus:border-primary"
          />
          <Button variant="secondary">
            Prijavi se
          </Button>
        </form>
      </div>
    </section>
  );
}
