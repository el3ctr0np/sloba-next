import { LoginForm } from "@/components/portal/LoginForm";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function ClientLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-xl">DJ</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Client Report</h1>
          <p className="text-slate-400 mt-2">
            Unesite pristupni kod za vaš izveštaj
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex justify-center">
          <LoginForm />
        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          Digital Jelisavac &middot; Google Ads Consulting
        </p>
      </div>
    </div>
  );
}
