"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  History,
  PenSquare,
  LogOut,
} from "lucide-react";

interface PortalNavProps {
  clientName: string;
}

const navItems = [
  { href: "/sr/portal/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/sr/portal/reports", label: "Izveštaji", icon: FileText },
  { href: "/sr/portal/history", label: "Istorija", icon: History },
  { href: "/sr/portal/unos", label: "Unesi podatke", icon: PenSquare },
];

export function PortalNav({ clientName }: PortalNavProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/portal/logout", { method: "POST" });
    router.push("/sr/portal");
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DJ</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">
                Klijent Portal
              </p>
              <p className="text-xs text-gray-500">{clientName}</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              );
            })}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors ml-2"
              title="Odjavi se"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Odjava</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
