import { LoginForm } from "@/components/portal/LoginForm";

export default function PortalLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">DJ</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Klijent Portal</h1>
          <p className="text-gray-500 mt-2">
            Pristupite vašem dashboardu i izveštajima
          </p>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex justify-center">
          <LoginForm />
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Digital Jelisavac &middot; Google Ads Consulting
        </p>
      </div>
    </div>
  );
}
