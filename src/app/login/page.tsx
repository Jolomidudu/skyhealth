"use client";

import Link from "next/link";
import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Stethoscope, ArrowRight, Eye, EyeOff } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/dashboard";

  const [email, setEmail] = useState("admin@skyhealth.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // redirect based on role
      if (data.user.role === "patient") {
        router.push("/patient");
      } else {
        router.push("/dashboard");
      }
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@hospital.com"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 pr-12 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="rounded border-slate-300" />
            Remember me
          </label>
          <span className="text-slate-400">Demo mode</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-700/25 transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>

      {/* Demo accounts */}
      <div className="mt-6 pt-6 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
          Demo accounts
        </p>
        <p className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
          Passwords | Admin: admin123 | Doctor: doctor123 | Patient: patient123
        </p>
        <div className="space-y-2 text-sm">
          {[
            { role: "Admin", email: "admin@skyhealth.com", pass: "admin123", color: "bg-blue-50 text-blue-700" },
            
            { role: "Doctor", email: "aisha@skyhealth.com", pass: "doctor123", color: "bg-emerald-50 text-emerald-700" },
            { role: "Patient", email: "james@email.com", pass: "patient123", color: "bg-amber-50 text-amber-700" },
          ].map((acc) => (
            <button
              key={acc.email}
              type="button"
              onClick={() => {
                setEmail(acc.email);
                setPassword(acc.pass);
                setError("");
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 transition text-left"
            >
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${acc.color}`}>
                {acc.role}
              </span>
              <span className="text-slate-600 text-xs truncate ml-2">{acc.email}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center shadow-lg shadow-blue-700/30">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">SkyHealth</span>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-slate-500 mt-2">
            Sign in to manage care, appointments & more
          </p>
        </div>

        <Suspense fallback={<div className="bg-white rounded-2xl p-8 text-center text-slate-400">Loading...</div>}>
          <LoginForm />
        </Suspense>

        <p className="text-center text-xs text-slate-400 mt-6">
          By continuing you agree to SkyHealth&apos;s Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
