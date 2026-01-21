"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Poruka poslata!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Ime"
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Poruka"
        rows={5}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <Button variant="secondary" className="w-full">
        Posalji
      </Button>
    </form>
  );
}
