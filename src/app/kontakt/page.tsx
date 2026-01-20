"use client";
import { useState } from "react";
import { Section, Button } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Poruka poslata!");
  };

  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4 text-center">Kontakt</h1>
        <p className="text-gray-600 text-center mb-8">ZakaÅ¾ite besplatnu konsultaciju</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Ime" required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <textarea placeholder="Poruka" rows={5} required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <Button variant="secondary" className="w-full">PoÅ¡alji</Button>
        </form>
      </div>
    </Section>
  );
}
