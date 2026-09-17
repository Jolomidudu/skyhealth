"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Calendar,
  Heart,
  LogOut,
  Stethoscope,
  Clock,
  FileText,
} from "lucide-react";

type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
};

export default function PatientPortalPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.user) {
          setUser(data.user);
        } else {
          router.push("/login");
        }
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-700 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900">SkyHealth</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Patient Portal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{user.avatar}</span>
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">{user.name}</p>
              <p className="text-xs text-slate-500 capitalize">{user.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Welcome, {user.name.split(" ")[0]} 👋
          </h2>
          <p className="text-slate-500 mt-1">
            View your appointments and health information.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Calendar, label: "My Appointments", desc: "Upcoming visits", color: "bg-blue-50 text-blue-700" },
            { icon: FileText, label: "Medical Records", desc: "History & reports", color: "bg-emerald-50 text-emerald-700" },
            { icon: Heart, label: "Care Team", desc: "Your doctors", color: "bg-rose-50 text-rose-700" },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center mb-3`}>
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">{card.label}</h3>
              <p className="text-sm text-slate-500 mt-0.5">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            Upcoming Appointments
          </h3>
          <div className="text-center py-10 text-slate-400">
            <p>No upcoming appointments yet.</p>
            <p className="text-sm mt-1">Contact your care team to schedule a visit.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to SkyHealth home
          </Link>
        </div>
      </main>
    </div>
  );
}
