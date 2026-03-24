import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import { PortalNav } from "@/components/portal/PortalNav";
import { ClientDataForm } from "@/components/portal/ClientDataForm";

export default async function PortalDataEntry() {
  const session = await getPortalSession();
  if (!session) redirect("/sr/portal");

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNav clientName={session.clientName} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Unos podataka</h1>
          <p className="text-gray-500 mt-1">
            Unesite broj poziva i završenih poslova za tekući mesec
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <ClientDataForm />
        </div>
      </div>
    </div>
  );
}
