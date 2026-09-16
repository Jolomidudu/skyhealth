import Link from "next/link";
import { Stethoscope, ArrowRight } from "lucide-react";

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

        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@hospital.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                defaultValue="admin@skyhealth.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                defaultValue="demo1234"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Forgot password?
              </a>
            </div>
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-700/25 transition"
            >
              Sign in
              <ArrowRight className="w-4 h-4" />
            </Link>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center text-sm text-slate-500">
            Demo credentials pre-filled.{" "}
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Skip to Dashboard →
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          By continuing you agree to SkyHealth&apos;s Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
}
